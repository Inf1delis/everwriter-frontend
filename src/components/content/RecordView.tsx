import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Record.less";

const RecordView = (props:{key:any, text:any, title:any}) => {
    return (
        <div className="record">
            {props.title}
        </div>);
}

export default RecordView;