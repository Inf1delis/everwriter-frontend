import * as React from "react";
import * as ReactDOM from "react-dom";
import DataStorage from "../../DataStorage";
const styles = require("./Header.less");

class AddButton extends React.Component {
    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event: any) {
        DataStorage.create({
            id: "31312312",
            ordinal: 0,
            status: 0,
            style: {color: ""},
            sync: false,
            text: "adadadasd",
            timestamp: 0,
            title: "hui"

        });
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