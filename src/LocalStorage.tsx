import {Record} from "./types";


const LocalStorage = {
    write: (record: Record[]): void => {
        localStorage['all'] = JSON.stringify(record);
    },

    read: (): Record[] => {
        try {
            return JSON.parse(localStorage["all"])
        } catch (e) {
            localStorage['all'] = '[]';
            return [];
        }
    }
};

export default LocalStorage;
