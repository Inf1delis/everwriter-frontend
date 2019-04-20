export enum Status {
    CREATED,
    UPDATED,
    DELETED
}

export interface Record {
    _id?: string, 
    id: string,
    timestamp: string,
    ordinal: number,
    title: string,
    text: string,
    style: {
        color: string
    },
    likes: number,
    sync?: boolean,
    deleted?: boolean
}


export interface EditorState {
    records: Record[]
}
export const RELOAD = 'RELOAD';
export const ADD_RECORD = 'ADD_RECORD';
export const UPDATE_RECORD = 'UPDATE_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';

interface ReloadAction {
    type: typeof RELOAD
}

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
    connectionStatus: boolean;
}

export interface IEmpty {}

export type EditorActionTypes = AddRecordAction | UpdateRecordAction | DeleteRecordAction | ReloadAction