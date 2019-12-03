import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductFilter from './ProductFilter';

import { fetchProductList } from '../ProductList/product-list-action';

import { setProductFilter, productFilterReset } from './product-filter-action';
import { productListReset } from '../ProductList/product-list-action';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        productListReset,
        setProductFilter,
        productFilterReset,
        fetchProductList
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(ProductFilter);
