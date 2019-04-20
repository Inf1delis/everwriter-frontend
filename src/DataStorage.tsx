import {Record} from "./types";
import LocalStorage from './LocalStorage'
import {updateRecord} from "./actions";
import {Synchronization} from "./Synchronization";
import RecordView from "./components/content/RecordView";


const DataStorage = {
    data: LocalStorage.read(),

    create: (record: Record, fromServer?: boolean) => {
        if (!fromServer) {
            record.sync = false;
            record.deleted = false;
        }
        if (!record.id) {
            record.id = Math.round(Math.random() * 1000000) + '';
        }

        DataStorage.data.unshift(record);
        LocalStorage.write(DataStorage.data);
        if (!fromServer) {
            Synchronization.toServer();
        }
    },
    list: (paging: { current: number, length: number }, filter: (record: Record) => boolean): Record[] => {
        let filtered: Record[] = DataStorage.data.filter((el) => {
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
    update: (record: Record, fromServer?: boolean): void => {
        let index: number = DataStorage.data.findIndex((el) => {
            return el.id == record.id
        });
        if (!fromServer) {
            record.sync = false;
        }
        if (DataStorage.data[index].deleted) {
            return;
        }

        if (index === -1) {
            DataStorage.create(record, fromServer);
            return;
        }

        DataStorage.data.splice(index, 1);
        DataStorage.data.unshift(record);
        LocalStorage.write(DataStorage.data);
        if (!fromServer) {
            Synchronization.toServer();
        }

    },

    delete: (record: Record, fromServer?: boolean): void => {
        record.deleted = true;
        let index: number = DataStorage.data.findIndex((el) => {
            return el.id == record.id
        });
        if (!fromServer) {
            record.sync = false;
        }
        if (index !== -1) {
            DataStorage.data[index] = record;
            LocalStorage.write(DataStorage.data);
            if (!fromServer) {
                Synchronization.toServer();
            }
        }
    },

    getLastDate: (): string => {
        let Records = DataStorage.data;
        let maxDate = 0;
        let maxIndex = -1;
        Records.forEach(function (value, index) {
            if (value.timestamp) {
                let newDate = new Date(value.timestamp);
                if (+newDate > maxDate) {
                    maxDate = +newDate;
                    maxIndex = index;
                }
            }

        })
        if (maxIndex === -1) {
            return '';
        }
        return Records[maxIndex].timestamp;
    }
};

export default DataStorage;