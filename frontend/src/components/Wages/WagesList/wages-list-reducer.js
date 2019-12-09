import {
    FETCH_WAGES_LIST_REQUEST,
    FETCH_WAGES_LIST_SUCCESS,
    FETCH_WAGES_LIST_FAILURE,
    FETCH_WAGES_LIST_RESET
} from './wages-list-action';

const initialState = {
    wagesList: [],
    loading: false,
    error: null
};

const wagesListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_WAGES_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_WAGES_LIST_SUCCESS:
            return {
                ...state,
                wagesList: action.payload,
                loading: false
            };
        case FETCH_WAGES_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_WAGES_LIST_RESET:
            return initialState;
        default:
            return state;
    }
};

export default wagesListReducer;
