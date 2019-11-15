import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserDelete from './UserDelete';

import { submitUserDelete } from './user-delete-action';

const mapStateToProps = ({ userDelete: { loading, loaded, error } }) => {
    return {
        loading,
        loaded,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onSubmit: submitUserDelete
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDelete);
