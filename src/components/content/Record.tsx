import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Record.less";

interface IState {
    deleted?: boolean
}

interface IProps {
    text?: string,
    title?: string,
}

class Record extends React.Component<IProps, IState> {
    constructor(props:any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.state = {
            deleted: false
        }
    }

    handleCheckBox(event:any) {
        this.setState({
            deleted: !this.state.deleted
        } as IState);
        alert('deleted')
    }

    handleClick (event:any) {
        alert("Record Editing");
    }

    render() {
        return (
            <div className='record'>
                <div onClick={this.handleClick}>
                    {this.props.title}
                </div>
                <input type="checkbox" defaultChecked={this.state.deleted} onClick={this.handleCheckBox} />
            </div>);
    }

}

export default Record;