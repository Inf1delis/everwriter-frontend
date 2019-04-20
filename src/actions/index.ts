import {
    Record,
    ADD_RECORD,
    EditorActionTypes,
    UPDATE_RECORD, DELETE_RECORD, RELOAD
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
