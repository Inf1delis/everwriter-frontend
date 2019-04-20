import * as React from "react";
import {Record} from '../../types'
// import "./PopUp.less"
import {PopUpState, IEmpty} from "../../types";
import store from "../../ReduxStore";
import Card from "./Card";

interface IProps {
    record?: Record;
    closeHdl?: ()=>void;
}

class PopUp extends React.Component<IProps, IEmpty> {
    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event: any) {
        this.props.closeHdl();
    }

    render() {
        return (
            <div className='popup'>
                <div className="popup__background"/>
                <Card
                    record={this.props.record}
                    handleClick={this.handleClick}/>
            </div>);
    }
}

export default PopUp;
