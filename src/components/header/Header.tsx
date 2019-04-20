import * as React from "react";
import AddButton from "./AddButton";
import StatusBar from "./StatusBar";
import "./Header.less";

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