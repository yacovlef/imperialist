import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderForm from './OrderForm';

const mapStateToProps = ({ orderForm: { loading, loaded, error } }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
