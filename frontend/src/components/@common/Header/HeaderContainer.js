import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './Header';

import { logout } from '../../Auth/auth-action';

const mapStateToProps = ({ auth: { user } }) => {
    return {
        user
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logout
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
