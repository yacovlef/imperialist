import {
    SUBMIT_USER_DELETE_REQUEST,
    SUBMIT_USER_DELETE_SUCCESS,
    SUBMIT_USER_DELETE_FAILURE,
} from './user-delete-action';

const initialState = {
    loading: false,
    loaded: false,
    error: null
};

const userListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_USER_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            };
        case SUBMIT_USER_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true
            };
        case SUBMIT_USER_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userListReducer;
