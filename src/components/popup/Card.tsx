import * as React from "react";
import {Record} from './../../types';
import store from "../../ReduxStore";
import {addRecord, updateRecord} from "../../actions";
import {any, string} from "prop-types";


class Card extends React.Component<{ record: Record, handleClick: (event: any) => void }, { currentRecord: Record, isNew: string }> {

    constructor(props: {
        record: Record,
        handleClick: (event: any) => void
    }) {
        super(props);
        this.handleSaveOrUpdate = this.handleSaveOrUpdate.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.state = {
            currentRecord: Object.assign({}, props.record),
            isNew: props.record.id ? "NO" : "YES"
        }
    }

    handleChangeTitle(event: any) {
        this.state.currentRecord.title = event.target.value;
    }

    handleChangeText(event: any) {
        this.state.currentRecord.text = event.target.value;
    }

    handleSaveOrUpdate(event: any) {
        store.dispatch(updateRecord(this.state.currentRecord));
        this.props.handleClick(event);
    }

    render() {
        return (
            <div className='card'>
                <button onClick={this.props.handleClick}>
                    CLOSE THIS SHIT
                </button>

                <input
                    onChange={this.handleChangeTitle}
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