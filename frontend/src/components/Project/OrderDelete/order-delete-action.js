import { deleteOrderApi } from './order-delete-api';

import { fetchOrderList } from '../OrderList/order-list-action';

const SUBMIT_ORDER_DELETE_REQUEST = 'SUBMIT_ORDER_DELETE_REQUEST';
const SUBMIT_ORDER_DELETE_SUCCESS = 'SUBMIT_ORDER_DELETE_SUCCESS';
const SUBMIT_ORDER_DELETE_FAILURE = 'SUBMIT_ORDER_DELETE_FAILURE';

const orderDeleteRequested = () => {
    return {
        type: SUBMIT_ORDER_DELETE_REQUEST
    };
};

const orderDeleteLoaded = () => {
    return {
        type: SUBMIT_ORDER_DELETE_SUCCESS
    };
};

const orderDeleteError = (error) => {
    return {
        type: SUBMIT_ORDER_DELETE_FAILURE,
        payload: error
    };
};

const submitOrderDelete = (id) => (dispatch) => {
    dispatch(orderDeleteRequested());

    deleteOrderApi(id)
        .then(() => {
            dispatch(orderDeleteLoaded());
            dispatch(fetchOrderList());
        })
        .catch((error) => dispatch(orderDeleteError(error)));
};

export {
    SUBMIT_ORDER_DELETE_REQUEST,
    SUBMIT_ORDER_DELETE_SUCCESS,
    SUBMIT_ORDER_DELETE_FAILURE,
    submitOrderDelete
};
