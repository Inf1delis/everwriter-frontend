import {
    Record,
    ADD_RECORD,
    EditorActionTypes,
    UPDATE_RECORD, DELETE_RECORD, RELOAD, NEXT_PAGE, FIRST_PAGE, LAST_PAGE, PREV_PAGE
} from "../types";

export function addRecord(newRecord: Record): EditorActionTypes {
    return {
        type: ADD_RECORD,
        payload: {record: newRecord}
    }
}

export function reloadAction(): EditorActionTypes {
    return {
        type: RELOAD
    }
}

export function updateRecord(updatedRecord: Record): EditorActionTypes {
    return {
        type: UPDATE_RECORD,
        payload: {record: updatedRecord}
    }
}


export function deleteRecord(deletedRecord: Record): EditorActionTypes {
    return {
        type: DELETE_RECORD,
        payload: {record: deletedRecord}
    }
}

export function nextPage(): EditorActionTypes {
    return {
        type: NEXT_PAGE
    }
}


export function prevPage(): EditorActionTypes {
    return {
        type: PREV_PAGE
    }
}

export function firstPage(): EditorActionTypes {
    return {
        type: FIRST_PAGE
    }
}

export function lastPage(): EditorActionTypes {
    return {
        type: LAST_PAGE
    }
}
