import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';

const mapStateToProps = ({ auth: { user } }) => {
    return {
        user
    };
};

export default connect(mapStateToProps)(PrivateRoute);
