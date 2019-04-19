import {ADD_RECORD, DELETE_RECORD, EditorActionTypes, EditorState, UPDATE_RECORD} from "../types";
import {combineReducers, createStore} from "redux";
import DataStorage from "../DataStorage";

const initialState: EditorState = {
    records: DataStorage.list({current: -1, length: 0}, ()=> true)
};

function editorReducer(
    state = initialState,
    action: EditorActionTypes
): EditorState {
    switch (action.type) {
        case ADD_RECORD:
            DataStorage.create(action.payload.record);
            return {
                records: DataStorage.list({current: -1, length: 0}, ()=> true)
            };
        case UPDATE_RECORD:
            return {
                records: state.records //FIXME
            };
        case DELETE_RECORD:
            return {
                records: state.records.filter(
                    record => record.id !== action.payload.id
                )
            };
        default:
            return state
    }
}

export default editorReducer;