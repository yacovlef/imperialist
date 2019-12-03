import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductDelete from './ProductDelete';

import { submitProductDelete } from './product-delete-action';

const mapStateToProps = ({ productDelete: { loading, loaded, error } }) => {
    return {
        loading,
        loaded,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onSubmit: submitProductDelete
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDelete);
