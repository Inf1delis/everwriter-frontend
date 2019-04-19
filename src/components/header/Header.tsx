import * as React from "react";
import * as ReactDOM from "react-dom";
import AddButton from "./AddButton";
import StatusBar from "./StatusBar";
import "./Header.less";

function Header() {
    return (
        <div className='header'>
            <div className='header_buttons'>
                <AddButton/>
                <StatusBar/>
            </div>
        </div>);
}

export default Header;