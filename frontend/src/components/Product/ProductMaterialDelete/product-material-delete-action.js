import { deleteProductMaterialApi } from './product-material-delete-api';

import { fetchProductList } from '../ProductList/product-list-action';

const SUBMIT_PRODUCT_MATERIAL_DELETE_REQUEST = 'SUBMIT_PRODUCT_MATERIAL_DELETE_REQUEST';
const SUBMIT_PRODUCT_MATERIAL_DELETE_SUCCESS = 'SUBMIT_PRODUCT_MATERIAL_DELETE_SUCCESS';
const SUBMIT_PRODUCT_MATERIAL_DELETE_FAILURE = 'SUBMIT_PRODUCT_MATERIAL_DELETE_FAILURE';

const productMaterialDeleteRequested = () => {
    return {
        type: SUBMIT_PRODUCT_MATERIAL_DELETE_REQUEST
    };
};

const productMaterialDeleteLoaded = () => {
    return {
        type: SUBMIT_PRODUCT_MATERIAL_DELETE_SUCCESS
    };
};

const productMaterialDeleteError = (error) => {
    return {
        type: SUBMIT_PRODUCT_MATERIAL_DELETE_FAILURE,
        payload: error
    };
};

const submitProductMaterialDelete = (id) => (dispatch) => {
    dispatch(productMaterialDeleteRequested());

    deleteProductMaterialApi(id)
        .then(() => {
            dispatch(productMaterialDeleteLoaded());
            dispatch(fetchProductList());
        })
        .catch((error) => dispatch(productMaterialDeleteError(error)));
};

export {
    SUBMIT_PRODUCT_MATERIAL_DELETE_REQUEST,
    SUBMIT_PRODUCT_MATERIAL_DELETE_SUCCESS,
    SUBMIT_PRODUCT_MATERIAL_DELETE_FAILURE,
    submitProductMaterialDelete
};
