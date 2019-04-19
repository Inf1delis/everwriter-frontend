import * as React from "react"
import {render} from 'react-dom';
import Scrollbars from "react-custom-scrollbars"
import Record from './Record'
import {inspect} from "util";
import './Record.less';
import DataStorage from "../../DataStorage";


const data: any = DataStorage.list({
    current: -1,
    length: 0
}, () => true);


function WorkSpace() {
    return (
        <div className="workspace">
            <div className='workspace_record'>
                {data.map((item: any, index: number) => <Record key={index} text={item.active} title={item.title}/>)}
            </div>
        </div>);
}

export default WorkSpace;