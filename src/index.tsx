import * as React from "react";
import App from "./components/App";
import { Provider } from 'react-redux'
import {render} from "react-dom";
import store from "./ReduxStore";
import {MyWebSocket} from './WebSocket';

MyWebSocket.connect();

//@ts-ignore
window.myWS=MyWebSocket;

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('main')
)