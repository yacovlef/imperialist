import {
    FETCH_PRODUCT_LIST_REQUEST,
    FETCH_PRODUCT_LIST_SUCCESS,
    FETCH_PRODUCT_LIST_FAILURE,
    FETCH_PRODUCT_LIST_RESET
} from './product-list-action';

const initialState = {
    productList: [],
    loading: false,
    error: null
};

const productListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                productList: action.payload,
                loading: false
            };
        case FETCH_PRODUCT_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_PRODUCT_LIST_RESET:
            return initialState;
        default:
            return state;
    }
};

export default productListReducer;
