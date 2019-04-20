import * as React from "react";
import * as ReactDOM from "react-dom";
import store from "../../ReduxStore";
import PopUp from "../header/AddButton";
import {firstPage, lastPage, nextPage, prevPage} from "../../actions";


export class PagingView extends React.Component<{currentPage: number, lastPage: number}, {}> {


    constructor(props: {currentPage: number, lastPage: number}) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
    }

    handleNext(){
        store.dispatch(nextPage());
    }

    handlePrev(){
        store.dispatch(prevPage());
    }

    handleFirst(){
        store.dispatch(firstPage());
    }

    handleLast(){
        store.dispatch(lastPage());
    }


    render() {
        return (
            <div className="btn-adaptive-parent">
                <button className="btn btn-outline-default btn-adaptive" onClick={this.handleFirst} disabled={this.props.currentPage==0}>{"<<"}</button>
                <button className="btn btn-outline-default" onClick={this.handlePrev} disabled={this.props.currentPage==0}>{"<"}</button>

                <button className="btn btn-outline-default" disabled={true}> {this.props.currentPage}/{this.props.lastPage} </button>

                <button className="btn btn-outline-default" onClick={this.handleNext} disabled={this.props.currentPage==this.props.lastPage}>{">"}</button>
                <button className="btn btn-outline-default btn-adaptive" onClick={this.handleLast} disabled={this.props.currentPage==this.props.lastPage}>{">>"}</button>
            </div>
        );
    }

}