import {
    SUBMIT_PROJECT_FORM_REQUEST,
    SUBMIT_PROJECT_FORM_SUCCESS,
    SUBMIT_PROJECT_FORM_FAILURE,
} from './project-form-action';

const initialState = {
    loading: false,
    loaded: false,
    error: null,
};

const projectFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_PROJECT_FORM_REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            };
        case SUBMIT_PROJECT_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true
            };
        case SUBMIT_PROJECT_FORM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default projectFormReducer;
