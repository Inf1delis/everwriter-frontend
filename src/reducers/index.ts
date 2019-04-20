import {ADD_RECORD, DELETE_RECORD, EditorActionTypes, EditorState, UPDATE_RECORD, RELOAD} from "../types";
import {combineReducers, createStore} from "redux";
import DataStorage from "../DataStorage";
import {act} from "react-dom/test-utils";

const initialState: EditorState = {
    records: DataStorage.list({current: -1, length: 0}, ()=> true)
};

function editorReducer(
    state = initialState,
    action: EditorActionTypes
): EditorState {
    switch (action.type) {
        case RELOAD:
            return {
                records: DataStorage.list({current: -1, length: 0}, ()=> true)
            }
        case ADD_RECORD:
            DataStorage.create(action.payload.record);
            return {
                records: DataStorage.list({current: -1, length: 0}, ()=> true)
            };
        case UPDATE_RECORD:
            DataStorage.update(action.payload.record);
            return {
                records: DataStorage.list({current: -1, length: 0}, ()=> true)
            };
        case DELETE_RECORD:
            DataStorage.delete(action.payload.record);
            return {
                records: DataStorage.list({current: -1, length: 0}, ()=> true)

            };
        default:
            return state
    }
}

export default editorReducer;