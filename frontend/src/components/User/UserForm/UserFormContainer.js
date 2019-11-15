import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserForm from './UserForm';

const mapStateToProps = ({ userForm: { loading, loaded, error } }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
