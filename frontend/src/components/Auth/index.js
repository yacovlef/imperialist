import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Auth from './Auth';

import { login } from '../../store/auth/auth-action';

const mapStateToProps = ({ auth: { user, loading, error } }) => {
    return {
        user,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch, { history }) => {
    return bindActionCreators({
        login: login(history)
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);