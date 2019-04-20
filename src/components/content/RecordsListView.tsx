import * as React from "react"
import RecordView from './RecordView'
import './Record.less';
import {Record} from '../../types';


const RecordsListView = (props: { records: Record[], itemClk: (rec: Record) => void }) => {
    return (
        <div className="workspace">
            <div className='workspace_record'>
                {props.records.map((item: any, index: number) => {
                    return <RecordView
                        key={index}
                        text={item.active}
                        title={item.title}
                        record={item}
                        itemClk={props.itemClk}/>;
                    })
                }
            </div>
        </div>);
}

export default RecordsListView;
