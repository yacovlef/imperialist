import { createProductPerformerApi } from './product-performer-add-api'

import { fetchProductList } from '../ProductList/product-list-action';

const SUBMIT_PRODUCT_PERFORMER_ADD_REQUEST = 'SUBMIT_PRODUCT_PERFORMER_ADD_REQUEST';
const SUBMIT_PRODUCT_PERFORMER_ADD_SUCCESS = 'SUBMIT_PRODUCT_PERFORMER_ADD_SUCCESS';
const SUBMIT_PRODUCT_PERFORMER_ADD_FAILURE = 'SUBMIT_PRODUCT_PERFORMER_ADD_FAILURE';

const productPerformerAddRequested = () => {
    return {
        type: SUBMIT_PRODUCT_PERFORMER_ADD_REQUEST
    };
};

const productPerformerAddLoaded = () => {
    return {
        type: SUBMIT_PRODUCT_PERFORMER_ADD_SUCCESS
    };
};

const productPerformerAddError = (error) => {
    return {
        type: SUBMIT_PRODUCT_PERFORMER_ADD_FAILURE,
        payload: error
    };
};

const submitProductPerformerAddCreate = (performer) => (dispatch) => {
    dispatch(productPerformerAddRequested());

    createProductPerformerApi(performer)
        .then(() => {
            dispatch(productPerformerAddLoaded());
            dispatch(fetchProductList());
        })
        .catch((error) => dispatch(productPerformerAddError(error)));
};

export {
    SUBMIT_PRODUCT_PERFORMER_ADD_REQUEST,
    SUBMIT_PRODUCT_PERFORMER_ADD_SUCCESS,
    SUBMIT_PRODUCT_PERFORMER_ADD_FAILURE,
    submitProductPerformerAddCreate
};
