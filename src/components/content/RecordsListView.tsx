import * as React from "react"
import RecordView from './RecordView'
import './Record.less';
import {Record} from '../../types';


const RecordsListView = (props: { records: Record[], itemClk: (rec: Record) => void }) => {
    return (
        <div className="row">
            {props.records.map((item: any, index: number) => {
                return <RecordView
                    key={index}
                    text={item.text}
                    title={item.title}
                    record={item}
                    itemClk={props.itemClk}/>;
            })}
        </div>
    );
}

export default RecordsListView;
