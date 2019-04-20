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
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            currentRecord : Object.assign({}, props.record),
            isNew : props.record.id ? "NO":"YES"
        }
    }

    handleChange(event:any){
        this.state.currentRecord.title = event.target.value;
        console.log(this.state.currentRecord);
    }

    handleSaveOrUpdate(event:any){
        store.dispatch(updateRecord(this.state.currentRecord));
        this.props.handleClick(event);
    }

    render() {
        return (
            <div className='card' >
            <input
                onChange={this.handleChange}
                defaultValue={this.state.currentRecord.title}
            >
            </input>
                <button onClick={this.handleSaveOrUpdate}>
                    SAVE
                </button>
            </div>
        );
    }
}

export default Card;