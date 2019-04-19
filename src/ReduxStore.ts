import {createStore} from "redux";
import editorApp from "./reducers"

const store = createStore(editorApp);

export default store;