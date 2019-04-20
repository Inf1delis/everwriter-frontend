import * as React from "react";
import * as ReactDOM from "react-dom";
import AddButton from "./AddButton";
import StatusBar from "./StatusBar";
import "./Header.less";
import {Record} from "../../types";

const Header = (props: { status:boolean}) => {

        return (
        <div className='header'>
            <div className='header_buttons'>
                <AddButton/>
                <StatusBar online = {props.status}/>
            </div>
        </div>);
}

export default Header;