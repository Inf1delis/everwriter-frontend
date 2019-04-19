import * as React from "react";
import * as ReactDOM from "react-dom";

const styles = require("./Header.less");

class AddButton extends React.Component {
    constructor(props:any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event:any) {
        alert('Added');
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