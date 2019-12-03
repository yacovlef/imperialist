import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductForm from './ProductForm';

const mapStateToProps = ({ productForm: { loading, loaded, error } }) => {
    return {
        loading,
        loaded,
        error
    };
};

const mapDispatchToProps = (dispatch, { onSubmit }) => {
    return bindActionCreators({
        onSubmit
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
