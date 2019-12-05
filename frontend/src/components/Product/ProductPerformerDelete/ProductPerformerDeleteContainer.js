import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductPerformerDelete from './ProductPerformerDelete';

import { submitProductPerformerDelete } from './product-performer-delete-action';

const mapStateToProps = ({ productPerformerDelete: { loading, loaded, error } }) => {
    return {
        loading,
        loaded,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onSubmit: submitProductPerformerDelete
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPerformerDelete);
