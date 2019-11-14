import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchUserList } from './user-list-action';

import UserList from './UserList';

const mapStateToProps = ({ userList: { userList, loading, error } }) => {
    return {
        userList,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchUserList
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
