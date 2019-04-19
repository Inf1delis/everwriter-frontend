import * as React from "react";
import * as ReactDOM from "react-dom";
import store from "../../ReduxStore";
import {addRecord} from "../../actions";

const styles = require("./Header.less");


class AddButton extends React.Component {
    constructor(props:any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event:any) {
        store.dispatch(addRecord({title:"OK", id:"12", ordinal:1, status:"CREATED", style:{color:"12"}, text:"OK", timestamp:1}))
    }

    render() {
        return (
            <button
                className={styles.add}
                onClick={this.handleClick}
            >
                AddButton
            </button>);
    }
}

export default AddButton;