import * as React from "react";
import {Record} from "../../types"
import AddPopUp from "../popup/AddPopUp";

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
                title: "",
                id: "",
                ordinal: 1,
                likes: 0,
                style: {color: "12"},
                text: "",
                timestamp: "",
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
                    <div className="add-button-text">
                    +
                    </div>
                </button>

                {this.state.show && <AddPopUp
                    record={Object.assign({}, this.state.tmp)}
                    closeHdl={() => this.setState({
                        show: this.checkShow(),
                        tmp: this.state.tmp
                    })}
                    currentNameAction='ADD'/>}


            </div>
        );
    }

    checkShow() {
        return !this.state.show;
    }

}

export default AddButton;