import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    AUTH_LOGOUT
} from './auth-action';

const initialState = {
    user: null,
    loading: false,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_REQUEST:
            return {
                ...state,
                loading: true
            };
        case AUTH_SUCCESS:        
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case AUTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case AUTH_LOGOUT:
            return {
                ...initialState
            };
        default:
            return state;
    }
};

export default authReducer;
