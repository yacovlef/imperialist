import { fetchProductList } from '../ProductList/product-list-action';

const SET_PRODUCT_FILTER_DATA = 'SET_PRODUCT_FILTER_DATA';
const SET_PRODUCT_FILTER_RESET = 'FETCH_PRODUCT_FILTER_RESET';

const productFilterSet = (productFilter) => {
    return {
        type: SET_PRODUCT_FILTER_DATA,
        payload: productFilter
    };
};

const productFilterReset = () => {
    return {
        type: SET_PRODUCT_FILTER_RESET
    };
};

const setProductFilter = (productFilter) => (dispatch) => {
    dispatch(productFilterSet(productFilter));

    dispatch(fetchProductList());
};

export {
    SET_PRODUCT_FILTER_DATA,
    SET_PRODUCT_FILTER_RESET,
    setProductFilter,
    productFilterReset
};
