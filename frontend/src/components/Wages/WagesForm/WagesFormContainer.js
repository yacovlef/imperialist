import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import WagesForm from './WagesForm';

const mapStateToProps = ({ wagesForm: { loading, loaded, error } }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(WagesForm);
