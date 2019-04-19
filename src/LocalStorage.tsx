import {Record} from "./types";




const LocalStorage = {

    write: (record: Record, length: number): void => {
        localStorage['item'+length.toString()] = JSON.stringify(record);
    },

    read: (): Record[] => {
        let data: Record[] = [];
        let i = 0;
        while (true) {
            let str:string = localStorage.getItem('item' + i.toString());
            if (!str)
                return data;
            data.push(JSON.parse(str));
            i++;
        }
    }
};

export default LocalStorage;
