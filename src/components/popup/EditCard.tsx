import * as React from "react";
import {Record} from './../../types';
import store from "../../ReduxStore";
import {addRecord, updateRecord} from "../../actions";
import Scrollbars from 'react-custom-scrollbars';
import TextareaAutosize from 'react-autosize-textarea';

interface IProps {
    record: Record;
    handleClick: (event: any) => void;
    currentNameAction: string;
}

interface IState {
    currentRecord: Record;
    isNew: string;
}


class EditCard extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.handleSaveOrUpdate = this.handleSaveOrUpdate.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.state = {
            currentRecord: Object.assign({}, props.record),
            isNew: props.record.id === "" ? "YES" : "NO",
        }
    }


    handleTitleChange(event: any) {
        this.state.currentRecord.title = event.target.value;
    }

    handleTextChange(event: any) {
        this.state.currentRecord.text = event.target.value;
    }

    handleSaveOrUpdate(event: any) {
        if (this.state.isNew === "YES")
            store.dispatch(addRecord(this.state.currentRecord));
        else
            store.dispatch(updateRecord(this.state.currentRecord));
        this.props.handleClick(event);
    }


    render() {
        return (
            <div className='text-center border border-light p-5 card-popup'>
                <p className="h4 mb-4"> {this.props.currentNameAction} </p>
                <input
                    className="form-control mb-4"
                    onChange={this.handleTitleChange}
                    defaultValue={this.state.currentRecord.title}
                    placeholder="Title"
                >
                </input>
                <div className="text_area_parent">
                        <TextareaAutosize
                            className="form-control mb-4 text__textarea"
                            onChange={this.handleTextChange}
                            defaultValue={this.state.currentRecord.text}
                            placeholder='Text'
                            rows={10}
                        >
                        </TextareaAutosize>
                    {this.confirmButtons()}
                </div>
            </div>
        );
    }

    confirmButtons() {
        return (
            <div className="card__button-container">
                <button className="btn btn-info btn-block btn-primary btn-lg" onClick={this.handleSaveOrUpdate}>
                    SAVE
                </button>
                <button className="btn btn-info btn-block btn-primary btn-lg" onClick={this.props.handleClick}>
                    CLOSE
                </button>
            </div>);
    }
}

export default EditCard;
