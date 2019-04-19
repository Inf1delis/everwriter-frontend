export enum Status {
    CREATED,
    UPDATED,
    DELETED
}

export interface Record {
    id: string,
    timestamp: number,
    ordinal: number,
    title: string,
    text: string,
    style: {
        color: string
    },
    status: Status,
    sync: boolean
}


export interface EditorState {
    records: Record[]
}

export const ADD_RECORD = 'ADD_RECORD';
export const UPDATE_RECORD = 'UPDATE_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';


interface AddRecordAction {
    type: typeof ADD_RECORD
    payload:{
        record: Record
    }
}

interface UpdateRecordAction {
    type: typeof UPDATE_RECORD
    payload: {
        record: Record
    }
}

interface DeleteRecordAction {
    type: typeof DELETE_RECORD
    payload: {
        id:string
    }
}

export type EditorActionTypes = AddRecordAction | UpdateRecordAction | DeleteRecordAction