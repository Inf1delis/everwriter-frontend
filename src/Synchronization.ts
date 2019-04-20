import DataStorage from "./DataStorage";
import {Record} from './types';
import {MyWebSocket} from "./WebSocket";

const Synchronization:any = {
    messageCallback(msgData:any) {
        if (msgData.response === 'post' || msgData.response === 'update') {
            DataStorage.update(msgData.data, true)
        }
    },

    fromServer(rs: Record[]) {
        rs.forEach((el) => {
            if(el.deleted){
                DataStorage.delete(el, true)
                return;
            }
            let List = DataStorage.list({current:-1, length:0}, (item) => {return item.id===el.id})
            if(List.length > 0){
                DataStorage.update(el, true)
            } else {
                DataStorage.create(el, true)
            }
        });
    },
    toServer() {

        if (MyWebSocket.connected){
            let List = DataStorage.data.filter((rec) => { return rec.sync === false;});
            
            List.forEach(function (value){
                if(value._id){
                    if(value.deleted){
                        MyWebSocket.send({
                            "action": "delete",
                            "data": {
                                "_id": value._id
                            }
                        })
                    } else {
                        MyWebSocket.send({
                            "action": "update",
                            "data": value
                        })
                    }
                } else {
                    MyWebSocket.send({
                        "action": "post",
                        "data": {
                            "id": value.id,
                            "title": value.title,
                            "text": value.text,
                            "style": {
                                "color": "black",
                            }
                        }
                    })
                }
            })
        }
        
    }
}

MyWebSocket.addMsgCallBack(Synchronization.messageCallback);

export {Synchronization};