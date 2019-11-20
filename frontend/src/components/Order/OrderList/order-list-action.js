import store from '../../../config/redux';

import { fetchOrderListApi } from './order-list-api';

const FETCH_ORDER_LIST_REQUEST = 'FETCH_ORDER_LIST_REQUEST';
const FETCH_ORDER_LIST_SUCCESS = 'FETCH_ORDER_LIST_SUCCESS';
const FETCH_ORDER_LIST_FAILURE = 'FETCH_ORDER_LIST_FAILURE';

const orderListRequested = () => {
    return {
        type: FETCH_ORDER_LIST_REQUEST
    };
};

const orderListLoaded = (orderList) => {
    return {
        type: FETCH_ORDER_LIST_SUCCESS,
        payload: orderList
    };
};

const orderListError = (error) => {
    return {
        type: FETCH_ORDER_LIST_FAILURE,
        payload: error
    };
};

const fetchOrderList = () => (dispatch) => {
    dispatch(orderListRequested());

    const { orderFilter } = store.getState();

    fetchOrderListApi(orderFilter)
        .then(({ data }) => dispatch(orderListLoaded(data)))
        .catch((error) => dispatch(orderListError(error)));
};

export {
    FETCH_ORDER_LIST_REQUEST,
    FETCH_ORDER_LIST_SUCCESS,
    FETCH_ORDER_LIST_FAILURE,
    fetchOrderList
};
