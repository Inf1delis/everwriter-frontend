import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Record.less";
import store from "../../ReduxStore";
import {deleteRecord, updateRecord} from "../../actions";
import {Record} from '../../types'
import {act} from "react-dom/test-utils";
import {MyWebSocket} from "../../WebSocket";
import {Synchronization} from "../../Synchronization";
import DataStorage from "../../DataStorage";

const RecordView = (props: { key: any, text: any, title: any, record: Record, itemClk: (rec: Record) => void }) => {
        const rateButton = (value: number, text:string) => {
            return (
                <button
                    className="btn-floating btn-sm btn-primary"
                    onClick={(event: any) => {
                        event.stopPropagation();

                        DataStorage.updateLikes(props.record);
                        MyWebSocket.send({
                                "action": "like",
                                "data": {
                                    "_id": props.record._id,
                                    "like":  value
                                }
                            }
                        );

                    }}
                >
                    {text}
                </button>
            );
        };

        return (
            <div className="col-md-4">
                <div className="card card-cascade mb-4">
                    <div className="card-body card-body-cascade text-center" onClick={() => {
                        props.itemClk(props.record);
                    }}>

                        {rateButton(-1, '-') /* dislike */}
                        <span className="like_counter">
                            {props.record.likes}
                        </span>
                        {rateButton(1, '+') /* dislike */}

                        <div className="card-title">
                            {props.title}
                        </div>
                        <div className="card-text">
                            {props.text}
                        </div>
                    </div>
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={(event) => {
                            event.stopPropagation();
                            store.dispatch(deleteRecord(props.record));
                        }}>
                        Delete
                    </button>
                </div>
            </div>)
            ;
    }
;

export default RecordView;