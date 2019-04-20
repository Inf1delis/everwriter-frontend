import { any } from "prop-types";

const MyWebSocket:any = {
    inst: undefined,
    queue:[],

    connect: () => {
        //connect to server
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
            console.log(event.data)
        }
        
    },
    send: (data:any) => {
        MyWebSocket.inst.send(JSON.stringify(data));
    }
    
    
    
}

export {MyWebSocket};