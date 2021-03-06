import * as React from "react";
import "./Header.less"
import ButtonGroup from "./ButtonGroup";

interface IState {
    text?: string,
    online?: Boolean
}

interface IProps {
    online: boolean
}

class StatusBar extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            online: props.status
        }
    }

    render() {
        return (
            <div className={this.props.online ? "online_status" : "offline_status"}>
                {this.props.online ? "Online" : "Offline"}
                <div>
                    <ButtonGroup/>
                </div>
            </div>);
    }

}

export default StatusBar;