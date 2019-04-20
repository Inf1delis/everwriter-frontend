import {Record} from "./types";
import LocalStorage from './LocalStorage'
import {updateRecord} from "./actions";


const DataStorage = {
    data: LocalStorage.read(),

    create: (record: Record) => {
        record.sync = false;
        record.deleted = false;
        let id:number = DataStorage.data.length + 1;
        record.id = id+'';
        DataStorage.data.push(record);
        LocalStorage.write(DataStorage.data);
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
        LocalStorage.write(DataStorage.data);

    },

    delete: (record: Record): void => {
        record.deleted = true;
        let index: number = DataStorage.data.findIndex((el) => {
            return el.id == record.id
        });
        record.sync = false;
        if (index !== -1) {
            DataStorage.data[index] = record;
            LocalStorage.write(DataStorage.data);
        }
    }
};

export default DataStorage;