import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { submitProductPerformerAddCreate } from './product-performer-add-action';
import { fetchUserList } from '../../User/UserList/user-list-action';

import ProductPerformerAdd from './ProductPerformerAdd';

const mapStateToProps = ({ userList: { userList }, productPerformerAdd: { loading, error } }) => {
    return {
        userList,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchUserList,
        submitProductPerformerAddCreate
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPerformerAdd);
