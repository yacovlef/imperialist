import { createProductApi, updateProductApi } from './product-form-api'

import { fetchProductList } from '../ProductList/product-list-action';

const SUBMIT_PRODUCT_FORM_REQUEST = 'SUBMIT_PRODUCT_FORM_REQUEST';
const SUBMIT_PRODUCT_FORM_SUCCESS = 'SUBMIT_PRODUCT_FORM_SUCCESS';
const SUBMIT_PRODUCT_FORM_FAILURE = 'SUBMIT_PRODUCT_FORM_FAILURE';

const productFormRequested = () => {
    return {
        type: SUBMIT_PRODUCT_FORM_REQUEST
    };
};

const productFormLoaded = () => {
    return {
        type: SUBMIT_PRODUCT_FORM_SUCCESS
    };
};

const productFormError = (error) => {
    return {
        type: SUBMIT_PRODUCT_FORM_FAILURE,
        payload: error
    };
};

const submitProductFormCreate = (product) => (dispatch) => {
    dispatch(productFormRequested());

    createProductApi(product)
        .then(() => {
            dispatch(productFormLoaded());
            dispatch(fetchProductList());
        })
        .catch((error) => dispatch(productFormError(error)));
};

const submitProductFormUpdate = (product) => (dispatch) => {
    dispatch(productFormRequested());

    updateProductApi(product)
        .then(() => {
            dispatch(productFormLoaded());
            dispatch(fetchProductList());
        })
        .catch((error) => dispatch(productFormError(error)));
};

export {
    SUBMIT_PRODUCT_FORM_REQUEST,
    SUBMIT_PRODUCT_FORM_SUCCESS,
    SUBMIT_PRODUCT_FORM_FAILURE,
    submitProductFormCreate,
    submitProductFormUpdate
};
