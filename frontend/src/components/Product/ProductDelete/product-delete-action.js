import { deleteProductApi } from './product-delete-api';

import { fetchProductList } from '../ProductList/product-list-action';

const SUBMIT_PRODUCT_DELETE_REQUEST = 'SUBMIT_PRODUCT_DELETE_REQUEST';
const SUBMIT_PRODUCT_DELETE_SUCCESS = 'SUBMIT_PRODUCT_DELETE_SUCCESS';
const SUBMIT_PRODUCT_DELETE_FAILURE = 'SUBMIT_PRODUCT_DELETE_FAILURE';

const productDeleteRequested = () => {
    return {
        type: SUBMIT_PRODUCT_DELETE_REQUEST
    };
};

const productDeleteLoaded = () => {
    return {
        type: SUBMIT_PRODUCT_DELETE_SUCCESS
    };
};

const productDeleteError = (error) => {
    return {
        type: SUBMIT_PRODUCT_DELETE_FAILURE,
        payload: error
    };
};

const submitProductDelete = (id) => (dispatch) => {
    dispatch(productDeleteRequested());

    deleteProductApi(id)
        .then(() => {
            dispatch(productDeleteLoaded());
            dispatch(fetchProductList());
        })
        .catch((error) => dispatch(productDeleteError(error)));
};

export {
    SUBMIT_PRODUCT_DELETE_REQUEST,
    SUBMIT_PRODUCT_DELETE_SUCCESS,
    SUBMIT_PRODUCT_DELETE_FAILURE,
    submitProductDelete
};
