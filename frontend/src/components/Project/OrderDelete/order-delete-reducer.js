import {
    SUBMIT_ORDER_DELETE_REQUEST,
    SUBMIT_ORDER_DELETE_SUCCESS,
    SUBMIT_ORDER_DELETE_FAILURE,
} from './order-delete-action';

const initialState = {
    loading: false,
    loaded: false,
    error: null
};

const orderListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_ORDER_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            };
        case SUBMIT_ORDER_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true
            };
        case SUBMIT_ORDER_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default orderListReducer;
