import { deleteProductPerformerApi } from './product-performer-delete-api';

import { fetchProductList } from '../ProductList/product-list-action';

const SUBMIT_PRODUCT_PERFORMER_DELETE_REQUEST = 'SUBMIT_PRODUCT_PERFORMER_DELETE_REQUEST';
const SUBMIT_PRODUCT_PERFORMER_DELETE_SUCCESS = 'SUBMIT_PRODUCT_PERFORMER_DELETE_SUCCESS';
const SUBMIT_PRODUCT_PERFORMER_DELETE_FAILURE = 'SUBMIT_PRODUCT_PERFORMER_DELETE_FAILURE';

const productPerformerDeleteRequested = () => {
    return {
        type: SUBMIT_PRODUCT_PERFORMER_DELETE_REQUEST
    };
};

const productPerformerDeleteLoaded = () => {
    return {
        type: SUBMIT_PRODUCT_PERFORMER_DELETE_SUCCESS
    };
};

const productPerformerDeleteError = (error) => {
    return {
        type: SUBMIT_PRODUCT_PERFORMER_DELETE_FAILURE,
        payload: error
    };
};

const submitProductPerformerDelete = (id) => (dispatch) => {
    dispatch(productPerformerDeleteRequested());

    deleteProductPerformerApi(id)
        .then(() => {
            dispatch(productPerformerDeleteLoaded());
            dispatch(fetchProductList());
        })
        .catch((error) => dispatch(productPerformerDeleteError(error)));
};

export {
    SUBMIT_PRODUCT_PERFORMER_DELETE_REQUEST,
    SUBMIT_PRODUCT_PERFORMER_DELETE_SUCCESS,
    SUBMIT_PRODUCT_PERFORMER_DELETE_FAILURE,
    submitProductPerformerDelete
};
