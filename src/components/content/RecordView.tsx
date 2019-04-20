import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Record.less";
import store from "../../ReduxStore";
import {deleteRecord} from "../../actions";
import {Record} from '../../types'

const RecordView = ((props:{key:any, text:any, title:any, record: any, itemClk:(rec:Record)=>void}) => {
    return (
        <div className="record" onClick={() => {
            props.itemClk(props.record);
        }}>
            {props.title}
            <button onClick={()=>{store.dispatch(deleteRecord(props.record))}}>
                Delete
            </button>
        </div>);
});

export default RecordView;