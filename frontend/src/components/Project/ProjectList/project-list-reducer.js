import {
    FETCH_PROJECT_LIST_REQUEST,
    FETCH_PROJECT_LIST_SUCCESS,
    FETCH_PROJECT_LIST_FAILURE,
    FETCH_PROJECT_LIST_RESET
} from './project-list-action';

const initialState = {
    projectList: [],
    loading: false,
    error: null
};

const projectListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROJECT_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PROJECT_LIST_SUCCESS:
            return {
                ...state,
                projectList: action.payload,
                loading: false
            };
        case FETCH_PROJECT_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_PROJECT_LIST_RESET:
            return initialState;
        default:
            return state;
    }
};

export default projectListReducer;
