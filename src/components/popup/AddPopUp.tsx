import PopUp from "./PopUp";
import EditCard from "./EditCard";
import * as React from "react";
import AddCard from "./AddCard";


class AddPopUp extends PopUp {
    currentCard(): any {
        return (
            <AddCard
                record={this.props.record}
                handleClick={this.handleClick}
                currentNameAction={this.props.currentNameAction}
            />
        )
    }
}


export default AddPopUp;