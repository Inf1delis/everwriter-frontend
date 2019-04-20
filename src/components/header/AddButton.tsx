import * as React from "react";
import * as ReactDOM from "react-dom";
import store from "../../ReduxStore";
import {addRecord} from "../../actions";
import PopUp from "../popup/PopUp";
import {Record} from "../../types"
import DataStorage from "../../DataStorage";

interface IProps {}

interface IState {
    show: boolean;
    tmp: Record;
}


class AddButton extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            show: DataStorage.data.length === 0,
            tmp: {
                title: "",
                id: "",
                ordinal: 1,
                likes: 0,
                style: {color: "12"},
                text: "TEXT",
                timestamp: "",
                sync: false,
                deleted: false,
                likes: 0
            }
        };
    }

    handleClick(event: any) {
        this.setState({
            show: !this.state.show,
            tmp: this.state.tmp
        });
    }

    render() {
        return (
            <div>
                <button
                    className="btn-floating btn-lg blue-gradient header__button-add"
                    onClick={this.handleClick}
                >
                    +
                </button>

                {this.state.show && <PopUp
                    record={Object.assign({}, this.state.tmp)}
                    closeHdl={() => this.setState({
                        show: this.checkShow(),
                        tmp: this.state.tmp
                    })}/>}


            </div>
        );
    }

    checkShow() {
        if (DataStorage.data.length === 0)
            return true;
        return !this.state.show;
    }

}

export default AddButton;