import { any } from "prop-types";
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
        //connect to serve
        MyWebSocket.inst = new WebSocket("ws://localhost:8080");
        
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
        }

        MyWebSocket.inst.onclose = () =>{
            MyWebSocket.connected = false ;
            MyWebSocket.inst = undefined;
            setTimeout(()=>{
                MyWebSocket.connect();
            },1000)
        }

        MyWebSocket.inst.onmessage = (event:any)=> {

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