import EditCard from "./EditCard";
import * as React from "react";

class AddCard extends EditCard {

    confirmButtons(): any {
        return (
            <div className="card__button-container">
                <button className="btn btn-info btn-block btn-primary btn-lg" onClick={this.handleSaveOrUpdate}>
                    ADD
                </button>
                <button className="btn btn-info btn-block btn-primary btn-lg" onClick={this.props.handleClick}>
                    CLOSE
                </button>
            </div>);
    }
}

export default AddCard;






