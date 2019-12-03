import {
    SUBMIT_PRODUCT_MATERIAL_DELETE_REQUEST,
    SUBMIT_PRODUCT_MATERIAL_DELETE_SUCCESS,
    SUBMIT_PRODUCT_MATERIAL_DELETE_FAILURE,
} from './product-material-delete-action';

const initialState = {
    loading: false,
    loaded: false,
    error: null
};

const productMaterialListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_PRODUCT_MATERIAL_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            };
        case SUBMIT_PRODUCT_MATERIAL_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true
            };
        case SUBMIT_PRODUCT_MATERIAL_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default productMaterialListReducer;
