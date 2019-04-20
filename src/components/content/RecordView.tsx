import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Record.less";
import store from "../../ReduxStore";
import {deleteRecord} from "../../actions";
import {Record} from '../../types'

const RecordView = ((props:{key:any, text:any, title:any, record: any, itemClk:(rec:Record)=>void}) => {
    return (
        <div className="col-md-4">
            <div className="card card-cascade mb-4">
                <div className="card-body card-body-cascade text-center" onClick={() => {
                    props.itemClk(props.record);
                }}>
                    <div className="card-title">
                        {props.title}
                    </div>
                    <div className="card-text">
                        {props.text}
                    </div>
                </div>
                <button
                    className="btn btn-primary btn-lg"
                    onClick={(event)=>{
                        event.stopPropagation();
                        store.dispatch(deleteRecord(props.record));
                    }}>
                    Delete
                </button>
            </div>
        </div>);
});

export default RecordView;