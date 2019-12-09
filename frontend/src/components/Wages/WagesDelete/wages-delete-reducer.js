import {
    SUBMIT_WAGES_DELETE_REQUEST,
    SUBMIT_WAGES_DELETE_SUCCESS,
    SUBMIT_WAGES_DELETE_FAILURE,
} from './wages-delete-action';

const initialState = {
    loading: false,
    loaded: false,
    error: null
};

const wagesListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_WAGES_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            };
        case SUBMIT_WAGES_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true
            };
        case SUBMIT_WAGES_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default wagesListReducer;
