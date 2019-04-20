import {
    ADD_RECORD,
    DELETE_RECORD,
    EditorActionTypes,
    FIRST_PAGE,
    LAST_PAGE,
    NEXT_PAGE,
    PREV_PAGE,
    Record,
    RELOAD, SORT_BY_LIKES, SORT_BY_NOVELTY,
    UPDATE_RECORD
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


export function sortByLikes(): EditorActionTypes {
    return {
        type: SORT_BY_LIKES
    }
}


export function sortByNovelty(): EditorActionTypes {
    return {
        type: SORT_BY_NOVELTY
    }
}
