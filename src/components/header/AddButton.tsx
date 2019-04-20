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
            show: false,
            tmp: {
                title: "TITLE",
                id: "",
                ordinal: 1,
                status: "CREATED",
                style: {color: "12"},
                text: "TEXT",
                timestamp: 1,
                sync: false,
                deleted: false
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
                        show: !this.state.show && DataStorage.data.length <= 0,
                        tmp: this.state.tmp
                    })}/>}


            </div>
        );
    }
}

export default AddButton;