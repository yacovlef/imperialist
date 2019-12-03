import store from '../../../config/redux';

import { fetchProductListApi } from './product-list-api';

const FETCH_PRODUCT_LIST_REQUEST = 'FETCH_PRODUCT_LIST_REQUEST';
const FETCH_PRODUCT_LIST_SUCCESS = 'FETCH_PRODUCT_LIST_SUCCESS';
const FETCH_PRODUCT_LIST_FAILURE = 'FETCH_PRODUCT_LIST_FAILURE';
const FETCH_PRODUCT_LIST_RESET = 'FETCH_PRODUCT_LIST_RESET';

const productListRequested = () => {
    return {
        type: FETCH_PRODUCT_LIST_REQUEST
    };
};

const productListLoaded = (productList) => {
    return {
        type: FETCH_PRODUCT_LIST_SUCCESS,
        payload: productList
    };
};

const productListError = (error) => {
    return {
        type: FETCH_PRODUCT_LIST_FAILURE,
        payload: error
    };
};

const productListReset = () => {
    return {
        type: FETCH_PRODUCT_LIST_RESET
    };
};

const fetchProductList = () => (dispatch) => {
    dispatch(productListRequested());

    const { productFilter } = store.getState();

    fetchProductListApi(productFilter)
        .then(({ data }) => dispatch(productListLoaded(data)))
        .catch((error) => dispatch(productListError(error)));
};

export {
    FETCH_PRODUCT_LIST_REQUEST,
    FETCH_PRODUCT_LIST_SUCCESS,
    FETCH_PRODUCT_LIST_FAILURE,
    FETCH_PRODUCT_LIST_RESET,
    productListReset,
    fetchProductList
};
