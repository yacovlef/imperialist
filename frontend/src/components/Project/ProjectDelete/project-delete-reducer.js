import {
    SUBMIT_PROJECT_DELETE_REQUEST,
    SUBMIT_PROJECT_DELETE_SUCCESS,
    SUBMIT_PROJECT_DELETE_FAILURE,
} from './project-delete-action';

const initialState = {
    loading: false,
    loaded: false,
    error: null
};

const projectListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_PROJECT_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            };
        case SUBMIT_PROJECT_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true
            };
        case SUBMIT_PROJECT_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default projectListReducer;
