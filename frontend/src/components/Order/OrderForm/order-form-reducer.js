import {
    SUBMIT_ORDER_FORM_REQUEST,
    SUBMIT_ORDER_FORM_SUCCESS,
    SUBMIT_ORDER_FORM_FAILURE,
} from './order-form-action';

const initialState = {
    loading: false,
    loaded: false,
    error: null,
};

const orderFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_ORDER_FORM_REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            };
        case SUBMIT_ORDER_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true
            };
        case SUBMIT_ORDER_FORM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default orderFormReducer;
