import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderDelete from './OrderDelete';

import { submitOrderDelete } from './order-delete-action';

const mapStateToProps = ({ orderDelete: { loading, loaded, error } }) => {
    return {
        loading,
        loaded,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onSubmit: submitOrderDelete
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDelete);
