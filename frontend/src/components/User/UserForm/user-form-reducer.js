import {
    SUBMIT_USER_FORM_REQUEST,
    SUBMIT_USER_FORM_SUCCESS,
    SUBMIT_USER_FORM_FAILURE,
} from './user-form-action';

const initialState = {
    loading: false,
    loaded: false,
    error: null,
};

const userFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_USER_FORM_REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            };
        case SUBMIT_USER_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true
            };
        case SUBMIT_USER_FORM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userFormReducer;
