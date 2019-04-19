import {Record} from "./types";
import LocalStorage from './LocalStorage'
import {updateRecord} from "./actions";


const DataStorage = {
    data: LocalStorage.read(),

    create: (record: Record) => {
        record.sync = false;
        DataStorage.data.push(record);
        LocalStorage.write(record, DataStorage.data.length-1);
        console.log(DataStorage.data);
    },
    list: (paging: { current: number, length: number }, filter: (record: Record) => boolean): Record[] => {
        let filtered: Record[] = DataStorage.data.filter((el)=>{
            if (el.deleted)
                return false;
            return filter(el);
        });

        if (paging.current == -1)
            return filtered;

        return filtered.slice(
            (paging.current - 1) * paging.length - 1,
            paging.length
        );
    },
    update: (record:Record): void => {
        let noDeleted: Record[] = DataStorage.list({
            current:-1,
            length:0}, () => true);

        let index: number = noDeleted.findIndex((el) => {
            return el.id == record.id
        });
        record.sync = false;
        DataStorage.data[index] = record;
        LocalStorage.write(record, index);

    },

    delete: (record: Record): void => {
        record.deleted = true;
        DataStorage.update(record);
    }
};

export default DataStorage;