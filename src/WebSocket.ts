import DataStorage from "./DataStorage";
import {Synchronization} from "./Synchronization";
import store from "./ReduxStore";
import {reloadAction} from "./actions";

const MyWebSocket:any = {

    statusChCallBack:null,

    msgCallBacks:[],
    addMsgCallBack(a: ()=> void){
        this.msgCallBacks.push(a)
    },

    removeMsgCallBack(a: ()=> void){
        let index = this.msgCallBacks.indexOf(a);
        this.msgCallBacks.splice(index, 1);
    },

    status:false,
    counters:0,
    inst: undefined,
    queue:[],

    connect: () => {

        //connect to server
        MyWebSocket.inst = new WebSocket(location.origin.replace(/^http/, 'ws'));
        //@ts-ignore
        window.mySocket =  MyWebSocket ;

        MyWebSocket.inst.onopen = () => {
            MyWebSocket.connected = true ;
            MyWebSocket.status=true;
            if(MyWebSocket.statusChCallBack)
            {
                MyWebSocket.statusChCallBack(true);
            }
            MyWebSocket.counters=0;
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
            Synchronization.toServer();
        }

        MyWebSocket.inst.onclose = () =>{
            MyWebSocket.connected = false ;
            MyWebSocket.inst = undefined;
            setTimeout(()=>{
                MyWebSocket.connect();
                MyWebSocket.counters++;
            },1000)
            if(MyWebSocket.counters>3){
                if(MyWebSocket.status&&MyWebSocket.statusChCallBack)
                    MyWebSocket.statusChCallBack(false);
                MyWebSocket.status=false;
            }
        }

        MyWebSocket.inst.onmessage = (event:any)=> {

            let msgData = JSON.parse(event.data);
            if(msgData.response == 'get'){
                Synchronization.fromServer(msgData.data);
                store.dispatch(reloadAction());
            }

            if(msgData.response == 'getAfterDate'){
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
