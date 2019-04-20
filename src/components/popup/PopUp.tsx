import * as React from "react";
// import "./EditPopUp.less"
import {IEmpty, Record} from '../../types'
import EditCard from "./EditCard";

interface IProps {
    record?: Record;
    closeHdl?: ()=>void;
    currentNameAction?: string;
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
                {this.currentCard()}
            </div>);
    }

    currentCard() {
        return(
            <EditCard
                record={this.props.record}
                handleClick={this.handleClick}
                currentNameAction={this.props.currentNameAction}
            />
        )

    }

}

export default PopUp;
