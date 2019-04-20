import {
    ADD_RECORD,
    DELETE_RECORD,
    EditorActionTypes,
    EditorState,
    FIRST_PAGE,
    LAST_PAGE,
    NEXT_PAGE,
    PREV_PAGE,
    RELOAD, SORT_BY_LIKES, SORT_BY_NOVELTY,
    UPDATE_RECORD,
} from "../types";
import DataStorage from "../DataStorage";

const initialState: EditorState = {
    records: DataStorage.list({current: 0, length: 6}, ()=> true, false),
    currentPage: 0,
    lastPage: ((DataStorage.list({current: -1, length: 0}, ()=> true, false).length-1)/6)>>0,
    length: 6,
    inDataStore: DataStorage.list({current: -1, length: 0}, ()=> true, false).length,
    sortByLikes: false
};

function editorReducer(
    state = initialState,
    action: EditorActionTypes
): EditorState {
    let allRecords;
    let newLastPage;

    switch (action.type) {
        case RELOAD:
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true, state.sortByLikes);
            newLastPage = ((allRecords.length-1)/6)>>0
            return {
                sortByLikes: state.sortByLikes,
                records: DataStorage.list({current: state.currentPage > newLastPage ? state.currentPage-1: state.currentPage, length: 6}, ()=> true, state.sortByLikes),
                currentPage: state.currentPage > newLastPage ? state.currentPage-1: state.currentPage,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length

            };
        case ADD_RECORD:
            DataStorage.create(action.payload.record);
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true, state.sortByLikes);
            newLastPage = ((allRecords.length-1)/6)>>0
            return {
                sortByLikes: state.sortByLikes,
                records: DataStorage.list({current: state.currentPage, length: 6}, ()=> true, state.sortByLikes),
                currentPage: state.currentPage,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        case UPDATE_RECORD:
            DataStorage.update(action.payload.record);
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true, state.sortByLikes);
            newLastPage = ((allRecords.length-1)/6)>>0
            return {
                sortByLikes: state.sortByLikes,
                records: DataStorage.list({current: state.currentPage, length: 6}, ()=> true, state.sortByLikes),
                currentPage: state.currentPage,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        case DELETE_RECORD:
            DataStorage.delete(action.payload.record);
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true, state.sortByLikes);
            newLastPage = ((allRecords.length-1)/6)>>0
            return {
                sortByLikes: state.sortByLikes,
                records: DataStorage.list({current: state.currentPage > newLastPage ? state.currentPage-1: state.currentPage, length: 6}, ()=> true, state.sortByLikes),
                currentPage: state.currentPage > newLastPage ? state.currentPage-1: state.currentPage,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        case FIRST_PAGE:
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true, state.sortByLikes);
            newLastPage = ((allRecords.length-1)/6)>>0
            return {
                sortByLikes: state.sortByLikes,
                records: DataStorage.list({current: 0, length: 6}, ()=> true, state.sortByLikes),
                currentPage: 0,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        case LAST_PAGE:
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true, state.sortByLikes);
            newLastPage = ((allRecords.length-1)/6)>>0
            return {
                sortByLikes: state.sortByLikes,
                records: DataStorage.list({current: newLastPage, length: 6}, ()=> true, state.sortByLikes),
                currentPage: ((allRecords.length-1)/6)>>0,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        case NEXT_PAGE:
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true, state.sortByLikes);
            newLastPage = ((allRecords.length-1)/6)>>0
            return{
                sortByLikes: state.sortByLikes,
                records: DataStorage.list({current: state.currentPage+1, length: 6}, ()=> true, state.sortByLikes),
                currentPage: state.currentPage+1,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        case PREV_PAGE:
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true, state.sortByLikes);
            newLastPage = ((allRecords.length-1)/6)>>0
            return{
                sortByLikes: state.sortByLikes,
                records: DataStorage.list({current: state.currentPage-1, length: 6}, ()=> true, state.sortByLikes),
                currentPage: state.currentPage-1,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        case SORT_BY_LIKES:
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true, true);
            newLastPage = ((allRecords.length-1)/6)>>0
            return {
                sortByLikes: true,
                records: DataStorage.list({current: state.currentPage > newLastPage ? state.currentPage-1: state.currentPage, length: 6}, ()=> true, true),
                currentPage: state.currentPage > newLastPage ? state.currentPage-1: state.currentPage,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        case SORT_BY_NOVELTY:
            allRecords = DataStorage.list({current: -1, length: 0}, ()=> true, false);
            newLastPage = ((allRecords.length-1)/6)>>0
            return {
                sortByLikes: false,
                records: DataStorage.list({current: state.currentPage > newLastPage ? state.currentPage-1: state.currentPage, length: 6}, ()=> true, false),
                currentPage: state.currentPage > newLastPage ? state.currentPage-1: state.currentPage,
                lastPage: newLastPage,
                length: 6,
                inDataStore: allRecords.length
            };
        default:
            return state
    }
}

export default editorReducer;