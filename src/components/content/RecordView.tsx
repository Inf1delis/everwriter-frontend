import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Record.less";
import store from "../../ReduxStore";
import {deleteRecord} from "../../actions";

const RecordView = (props:{key:any, text:any, title:any, record: any}) => {
    return (
        <div className="record">
            {props.title}
            <button onClick={()=>{store.dispatch(deleteRecord(props.record))}}>
                Delete

            </button>
        </div>);
}

export default RecordView;