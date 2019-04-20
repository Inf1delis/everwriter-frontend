import * as React from "react";
import * as ReactDOM from 'react-dom';
import * as Modal from 'react-modal';
import {Record} from '../../../types'
// import "./PopUp.less"
import * as App from '../../App'
import {PopUpState, IEmpty} from "../../../types";

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
                <button name="PoP Up, Bitch" onClick={this.handleClick}/>
                sadasdasdasdadasa
            </div>);
    }
}

export default PopUp;