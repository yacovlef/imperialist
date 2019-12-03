import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchProductList } from './product-list-action';

import ProductList from './ProductList';

const mapStateToProps = ({ productList: { productList, loading, error } }) => {
    return {
        productList,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchProductList
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
