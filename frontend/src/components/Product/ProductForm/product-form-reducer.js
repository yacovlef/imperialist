import {
    SUBMIT_PRODUCT_FORM_REQUEST,
    SUBMIT_PRODUCT_FORM_SUCCESS,
    SUBMIT_PRODUCT_FORM_FAILURE,
} from './product-form-action';

const initialState = {
    loading: false,
    loaded: false,
    error: null,
};

const productFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_PRODUCT_FORM_REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            };
        case SUBMIT_PRODUCT_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true
            };
        case SUBMIT_PRODUCT_FORM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default productFormReducer;
