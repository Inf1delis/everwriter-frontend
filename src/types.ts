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
    records: Record[],
    currentPage: number,
    length: number,
    lastPage: number,
    inDataStore: number,
    sortByLikes: boolean
}
export const RELOAD = 'RELOAD';
export const ADD_RECORD = 'ADD_RECORD';
export const UPDATE_RECORD = 'UPDATE_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';
export const FIRST_PAGE = 'FIRST_PAGE';
export const LAST_PAGE = 'LAST_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const SORT_BY_LIKES = 'SORT_BY_LIKES';
export const SORT_BY_NOVELTY = 'SORT_BY_NOVELTY';


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

interface FirstPageAction {
    type: typeof FIRST_PAGE
}

interface LastPageRecordAction {
    type: typeof LAST_PAGE
}

interface NextPageAction {
    type: typeof NEXT_PAGE
}

interface PrevPageAction {
    type: typeof PREV_PAGE
}

interface SortByLikesAction {
    type: typeof SORT_BY_LIKES
}

interface SortByNoveltyAction {
    type: typeof SORT_BY_NOVELTY
}

export interface PopUpState {
    pulledRecord: Record;
    stateStatus: boolean;
    connectionStatus: boolean;
}

export interface IEmpty {}

export type EditorActionTypes = AddRecordAction | UpdateRecordAction | DeleteRecordAction | ReloadAction | FirstPageAction | LastPageRecordAction | NextPageAction | PrevPageAction | SortByLikesAction | SortByNoveltyAction