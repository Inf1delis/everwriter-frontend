import {
    ADD_RECORD,
    DELETE_RECORD,
    EditorActionTypes,
    EditorState,
    UPDATE_RECORD,
    RELOAD,
    FIRST_PAGE,
    LAST_PAGE,
    NEXT_PAGE,
    PREV_PAGE
} from "../types";
import {combineReducers, createStore} from "redux";
import DataStorage from "../DataStorage";
import {act} from "react-dom/test-utils";

const initialState: EditorState = {
    records: DataStorage.list({current: 0, length: 6}, ()=> true),
    currentPage: 0,
    lastPage: ((DataStorage.list({current: -1, length: 0}, ()=> true).length-1)/6)>>0,
    length: 6,
    inDataStore: DataStorage.list({current: -1, length: 0}, ()=> true).length
};

function editorReducer(
    state = initialState,
    action: EditorActionTypes
): EditorState {
    let allRecords;
    let newLastPage;

    switch (action.type) {
        case RELOAD:
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true);
            newLastPage = ((allRecords.length-1)/6)>>0
            return {
                records: DataStorage.list({current: state.currentPage, length: 6}, ()=> true),
                currentPage: state.currentPage,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            }
        case ADD_RECORD:
            DataStorage.create(action.payload.record);
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true);
            newLastPage = ((allRecords.length-1)/6)>>0
            return {
                records: DataStorage.list({current: state.currentPage, length: 6}, ()=> true),
                currentPage: state.currentPage,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        case UPDATE_RECORD:
            DataStorage.update(action.payload.record);
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true);
            newLastPage = ((allRecords.length-1)/6)>>0
            return {
                records: DataStorage.list({current: state.currentPage, length: 6}, ()=> true),
                currentPage: state.currentPage,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        case DELETE_RECORD:
            DataStorage.delete(action.payload.record);
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true);
            newLastPage = ((allRecords.length-1)/6)>>0
            return {
                records: DataStorage.list({current: state.currentPage > newLastPage ? state.currentPage-1: state.currentPage, length: 6}, ()=> true),
                currentPage: state.currentPage > newLastPage ? state.currentPage-1: state.currentPage,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        case FIRST_PAGE:
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true);
            newLastPage = ((allRecords.length-1)/6)>>0
            return {
                records: DataStorage.list({current: 0, length: 6}, ()=> true),
                currentPage: 0,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        case LAST_PAGE:
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true);
            newLastPage = ((allRecords.length-1)/6)>>0
            return {
                records: DataStorage.list({current: newLastPage, length: 6}, ()=> true),
                currentPage: ((allRecords.length-1)/6)>>0,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        case NEXT_PAGE:
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true);
            newLastPage = ((allRecords.length-1)/6)>>0
            return{
                records: DataStorage.list({current: state.currentPage+1, length: 6}, ()=> true),
                currentPage: state.currentPage+1,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        case PREV_PAGE:
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true);
            newLastPage = ((allRecords.length-1)/6)>>0
            return{
                records: DataStorage.list({current: state.currentPage-1, length: 6}, ()=> true),
                currentPage: state.currentPage-1,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        default:
            return state
    }
}

export default editorReducer;