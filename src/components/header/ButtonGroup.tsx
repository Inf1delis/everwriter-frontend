import * as React from "react";
import {number} from "prop-types";


interface IProps {

}

interface IState {
    status: number;
}

class ButtonGroup extends React.Component<IProps, IState> {

    state: IState = {
        status: 0,
    };

    render() {
        return (
            <div className="btn-group" data-toggle="buttons">
            <label className={"btn btn-light-blue form-check-label" + (0 == this.state.status ? " active" : '')}>
                <input className="form-check-input" type="radio" name="options" id="option1"
                       checked={0 == this.state.status}
                       onChange={() => {this.setState({
                           status: 0
                       })}}/>
                New
            </label>
            <label className={"btn btn-light-blue form-check-label" + (1 == this.state.status ? " active" : '')} >
                <input className="form-check-input" type="radio" name="options" id="option3"
                       checked={1 == this.state.status}
                       onChange={() => {this.setState({
                           status: 1
                       })}}/>
                       Popular
            </label>
        </div>
        );
    }
}

export default ButtonGroup;