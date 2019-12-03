import { createProductMaterialApi } from './product-material-add-api'

import { fetchProductList } from '../ProductList/product-list-action';

const SUBMIT_PRODUCT_MATERIAL_ADD_REQUEST = 'SUBMIT_PRODUCT_MATERIAL_ADD_REQUEST';
const SUBMIT_PRODUCT_MATERIAL_ADD_SUCCESS = 'SUBMIT_PRODUCT_MATERIAL_ADD_SUCCESS';
const SUBMIT_PRODUCT_MATERIAL_ADD_FAILURE = 'SUBMIT_PRODUCT_MATERIAL_ADD_FAILURE';

const productMaterialAddRequested = () => {
    return {
        type: SUBMIT_PRODUCT_MATERIAL_ADD_REQUEST
    };
};

const productMaterialAddLoaded = () => {
    return {
        type: SUBMIT_PRODUCT_MATERIAL_ADD_SUCCESS
    };
};

const productMaterialAddError = (error) => {
    return {
        type: SUBMIT_PRODUCT_MATERIAL_ADD_FAILURE,
        payload: error
    };
};

const submitProductMaterialAddCreate = (material) => (dispatch) => {
    dispatch(productMaterialAddRequested());

    createProductMaterialApi(material)
        .then(() => {
            dispatch(productMaterialAddLoaded());
            dispatch(fetchProductList());
        })
        .catch((error) => dispatch(productMaterialAddError(error)));
};

export {
    SUBMIT_PRODUCT_MATERIAL_ADD_REQUEST,
    SUBMIT_PRODUCT_MATERIAL_ADD_SUCCESS,
    SUBMIT_PRODUCT_MATERIAL_ADD_FAILURE,
    submitProductMaterialAddCreate
};
