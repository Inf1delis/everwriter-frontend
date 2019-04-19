import {
    Record,
    ADD_RECORD,
    EditorActionTypes,
    UPDATE_RECORD, DELETE_RECORD
} from "../types";

export function addRecord(newRecord: Record): EditorActionTypes {
    return {
        type: ADD_RECORD,
        payload: {record: newRecord}
    }
}

export function updateRecord(updatedRecord: Record): EditorActionTypes {
    return {
        type: UPDATE_RECORD,
        payload: {record: updatedRecord}
    }
}

export function deleteRecord(id: string): EditorActionTypes {
    return {
        type: DELETE_RECORD,
        payload: {
            id: id
        }
    }
}
