import {ADD_RECORD, DELETE_RECORD, EditorActionTypes, EditorState, UPDATE_RECORD} from "../types";
import {combineReducers} from "redux";


const initialState: EditorState = {
    records: []
};

function editorReducer(
    state = initialState,
    action: EditorActionTypes
): EditorState {
    switch (action.type) {
        case ADD_RECORD:
            return {
                records: [...state.records, action.payload.record]
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

const editorApp = combineReducers({
    editorReducer,
})

export default editorApp;