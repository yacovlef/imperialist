import { fetchOrderList } from '../OrderList/order-list-action';

const SET_ORDER_FILTER_DATA = 'SET_ORDER_FILTER_DATA';

const orderFilterSet = (orderFilter) => {
    return {
        type: SET_ORDER_FILTER_DATA,
        payload: orderFilter
    };
};

const setOrderFilter = (orderFilter) => (dispatch) => {
    dispatch(orderFilterSet(orderFilter));

    dispatch(fetchOrderList());
};

export {
    SET_ORDER_FILTER_DATA,
    setOrderFilter
};
