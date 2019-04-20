import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Record.less";
import store from "../../ReduxStore";
import {deleteRecord, updateRecord} from "../../actions";
import {Record} from '../../types'
import {act} from "react-dom/test-utils";


const RecordView = (props: { key: any, text: any, title: any, record: any, itemClk: (rec: Record) => void }) => {
        const setLike = (like: number, event: any) => {
            event.stopPropagation();
            const liked = Object.assign({}, props.record);
            liked.likes += like;
            store.dispatch(updateRecord(liked))
        };
        return (
            <div className="col-md-4">
                <div className="card card-cascade mb-4">
                    <div className="card-body card-body-cascade text-center" onClick={() => {
                        props.itemClk(props.record);
                    }}>
                        <div className="like_counter">
                            {props.record.likes}
                        </div>

                        <button
                            className="like"
                            onClick={(event: any) => setLike(1, event)}
                        >
                            Like
                        </button>

                        <button
                            className="dislike"
                            onClick={(event: any) => setLike(-1, event)}
                        >
                            Dislike
                        </button>

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