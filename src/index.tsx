import * as React from "react";
import App from "./components/App";
import { Provider } from 'react-redux'
import {createStore} from "redux";
import {render} from "react-dom";
import editorApp from "./reducers"

const store = createStore(editorApp);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('main')
)