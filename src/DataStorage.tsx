import {Record} from "./types";
import LocalStorage from './LocalStorage'


const DataStorage = {
    data: LocalStorage.read(),

    create: (record: Record) => {
        record.sync = false;
        DataStorage.data.push(record);
        LocalStorage.write(record, DataStorage.data.length-1)
    },
    list: (paging: { current: number, length: number }, filter: (record: Record) => boolean): Record[] => {
        let filtered: Record[] = DataStorage.data.filter(filter);
        if (paging.current == -1)
            return filtered;

        return filtered.slice(
            (paging.current - 1) * paging.length - 1,
            paging.length
        );
    }
    /*update() {

    }

    delete() {

    }*/
};

export default DataStorage;