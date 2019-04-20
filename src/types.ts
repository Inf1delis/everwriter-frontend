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
    status: string,
    sync?: boolean,
    deleted?: boolean,
    likes: number
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
        record: Record
    }
}

export interface PopUpState {
    pulledRecord: Record;
    stateStatus: boolean;
}

export interface IEmpty {}

export type EditorActionTypes = AddRecordAction | UpdateRecordAction | DeleteRecordAction