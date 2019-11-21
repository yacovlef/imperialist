import {
    SET_ORDER_FILTER_DATA
} from './order-filter-action';

const initialState = {
    status: ''
};

const orderFilterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ORDER_FILTER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default orderFilterReducer;
