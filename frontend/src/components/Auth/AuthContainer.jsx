import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Auth from './Auth';

import { login } from './auth-action';

const mapStateToProps = ({ auth: { user, loading, error } }) => {
    return {
        user,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
