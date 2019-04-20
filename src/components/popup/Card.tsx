import * as React from "react";
import {Record } from './../../types';
import store from "../../ReduxStore";
import {addRecord, updateRecord} from "../../actions";
import {any, string} from "prop-types";


class Card extends React.Component<{record:Record, handleClick:(event: any)=>void}, {currentRecord:Record, isNew:string}> {

    constructor(props:{
        record:Record,
        handleClick:(event: any)=>void
    }) {
        super(props);

        this.handleSaveOrUpdate = this.handleSaveOrUpdate.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);

        this.state = {
            currentRecord : Object.assign({}, props.record),
            isNew : props.record.id ? "YES":"NO"
        }
    }


    handleTitleChange(event:any){
        this.state.currentRecord.title = event.target.value;
    }

    handleChangeText(event: any) {
        this.state.currentRecord.text = event.target.value;
    }

    handleTextChange(event:any){
        this.state.currentRecord.text = event.target.value;
    }

    handleSaveOrUpdate(event:any){
        if (this.state.isNew === "YES")
            store.dispatch(addRecord(this.state.currentRecord));
        else
            store.dispatch(updateRecord(this.state.currentRecord));
        this.props.handleClick(event);
    }

    render() {
        return (
            <div className='card' >
                <input
                    onChange={this.handleTitleChange}
                    defaultValue={this.state.currentRecord.title}
                />

                <input
                    onChange={this.handleChangeText}
                    defaultValue={this.state.currentRecord.text}
                />

                <button onClick={this.handleSaveOrUpdate}>
                    SAVE
                </button>
            </div>
        );
    }
}

export default Card;
