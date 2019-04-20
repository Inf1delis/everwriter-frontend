import { any } from "prop-types";
import DataStorage from "./DataStorage";
import { Synchronization } from "./Synchronization";
import store from "./ReduxStore";
import { reloadAction } from "./actions";

const MyWebSocket:any = {
    msgCallBacks:[],
    addMsgCallBack(a: ()=> void){
        this.msgCallBacks.push(a)
    },

    removeMsgCallBack(a: ()=> void){
        let index = this.msgCallBacks.indexOf(a);
        this.msgCallBacks.splice(index, 1);
    },

    inst: undefined,
    queue:[],

    connect: () => {

        //connect to server
        MyWebSocket.inst = new WebSocket(location.origin.replace(/^http/, 'ws'));
        //@ts-ignore
        window.mySocket =  MyWebSocket ;

        MyWebSocket.inst.onopen = () => {
            MyWebSocket.connected = true ;

            if(MyWebSocket.queue.length>0)
            {
                MyWebSocket.queue.forEach((element:any) => {
                    MyWebSocket.send(element);
                });
                MyWebSocket.queue=[];
            }

            let str = DataStorage.getLastDate();
            if(str){
                MyWebSocket.send({
                    action: "getAfterDate",
                    data: {
                        timestamp: str
                    }
                })
            } else {
                MyWebSocket.send({
                    action: "get"
                })
            }
        }

        MyWebSocket.inst.onclose = () =>{
            MyWebSocket.connected = false ;
            MyWebSocket.inst = undefined;
            setTimeout(()=>{
                MyWebSocket.connect();
            },1000)
        }

        MyWebSocket.inst.onmessage = (event:any)=> {

            let msgData = JSON.parse(event.data);
            if(msgData.response == 'get' || msgData.response == 'getAfterDate'){
                Synchronization.fromServer(msgData.data);
                store.dispatch(reloadAction());
            }

            MyWebSocket.msgCallBacks.forEach((element:any) => {
                element(msgData);
            });
        }

    },
    send: (data:any) => {
        if(MyWebSocket.connected==true)
            MyWebSocket.inst.send(JSON.stringify(data));
        else
            MyWebSocket.queue.push(data)
    }



}

export {MyWebSocket};
