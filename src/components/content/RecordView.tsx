import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Record.less";
import store from "../../ReduxStore";
import {deleteRecord, updateRecord} from "../../actions";
import {Record} from '../../types'
import {act} from "react-dom/test-utils";
import {MyWebSocket} from "../../WebSocket";

const RecordView = (props: { key: any, text: any, title: any, record: any, itemClk: (rec: Record) => void }) => {
        const rateButton = (value: number, text:string) => {
            return (
                <button
                    className="btn-floating btn-sm btn-primary"
                    onClick={(event: any) => {
                        event.stopPropagation();
                        const liked = Object.assign({}, props.record);
                        liked.likes += value;
                        MyWebSocket.send({
                                "action": "like",
                                "data": {
                                    "_id": liked.id,
                                    "like":  liked.likes
                                }
                            }
                        )

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