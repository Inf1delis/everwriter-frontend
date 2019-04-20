import * as React from "react";
import * as ReactDOM from "react-dom";

const styles = require("./Header.less");

interface IState {
    text?: string;
    online?: Boolean
}

interface IProps {}
class StatusBar extends React.Component<IProps, IState> {
    constructor(props:any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            online: true
        }
    }

    handleClick (event:any) {
        this.setState({
            online: !this.state.online
        } as IState)
    }

    render() {
        return (
            <div className={styles.status} onClick={this.handleClick}>
                Online: {this.state.online ? "y": "n"}
            </div>);
    }

}

export default StatusBar;