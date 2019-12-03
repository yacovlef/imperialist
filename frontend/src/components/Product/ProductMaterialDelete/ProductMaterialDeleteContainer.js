import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductMaterialDelete from './ProductMaterialDelete';

import { submitProductMaterialDelete } from './product-material-delete-action';

const mapStateToProps = ({ productMaterialDelete: { loading, loaded, error } }) => {
    return {
        loading,
        loaded,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onSubmit: submitProductMaterialDelete
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductMaterialDelete);
