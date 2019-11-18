import { createOrderApi, updateOrderApi } from './order-form-api'

import { fetchOrderList } from '../OrderList/order-list-action';

const SUBMIT_ORDER_FORM_REQUEST = 'SUBMIT_ORDER_FORM_REQUEST';
const SUBMIT_ORDER_FORM_SUCCESS = 'SUBMIT_ORDER_FORM_SUCCESS';
const SUBMIT_ORDER_FORM_FAILURE = 'SUBMIT_ORDER_FORM_FAILURE';

const orderFormRequested = () => {
    return {
        type: SUBMIT_ORDER_FORM_REQUEST
    };
};

const orderFormLoaded = () => {
    return {
        type: SUBMIT_ORDER_FORM_SUCCESS
    };
};

const orderFormError = (error) => {
    return {
        type: SUBMIT_ORDER_FORM_FAILURE,
        payload: error
    };
};

const submitOrderFormCreate = (order) => (dispatch) => {
    dispatch(orderFormRequested());

    createOrderApi(order)
        .then(() => {
            dispatch(orderFormLoaded());
            dispatch(fetchOrderList());
        })
        .catch((error) => dispatch(orderFormError(error)));
};

const submitOrderFormUpdate = (order) => (dispatch) => {
    dispatch(orderFormRequested());

    updateOrderApi(order)
        .then(() => {
            dispatch(orderFormLoaded());
            dispatch(fetchOrderList());
        })
        .catch((error) => dispatch(orderFormError(error)));
};

export {
    SUBMIT_ORDER_FORM_REQUEST,
    SUBMIT_ORDER_FORM_SUCCESS,
    SUBMIT_ORDER_FORM_FAILURE,
    submitOrderFormCreate,
    submitOrderFormUpdate
};
