import {
    SET_PRODUCT_FILTER_DATA,
    SET_PRODUCT_FILTER_RESET
} from './product-filter-action';

const initialState = {
    OrderId: null,
    status: ''
};

const productFilterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PRODUCT_FILTER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SET_PRODUCT_FILTER_RESET:
            return initialState;
        default:
            return state;
    }
};

export default productFilterReducer;
