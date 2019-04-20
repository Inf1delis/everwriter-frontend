import { any } from "prop-types";
function we(){console.log('ss')}
function wew(){console.log('ss')}
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

        }

        MyWebSocket.inst.onclose = () =>{
            MyWebSocket.connected = false ;
            MyWebSocket.inst = undefined;
            setTimeout(()=>{
                MyWebSocket.connect();
            },1000)
        }
       /* MyWebSocket.inst.onerror = () =>{
            MyWebSocket.connected = false ;
            MyWebSocket.inst = undefined;
            setTimeout(()=>{
                MyWebSocket.connect();
            },1000)
        }*/

        MyWebSocket.inst.onmessage = (event:any)=> {

        }
        
    },
    send: (data:any) => {
        MyWebSocket.inst.send(JSON.stringify(data));
    }
    
    
    
}

export {MyWebSocket};