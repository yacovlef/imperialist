import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import WagesFilter from './WagesFilter';

import { fetchUserList } from '../../User/UserList/user-list-action';
import { fetchWagesList } from '../WagesList/wages-list-action';

import { setWagesFilter, wagesFilterReset } from './wages-filter-action';
import { wagesListReset } from '../WagesList/wages-list-action';

const mapStateToProps = ({ userList: { userList } }) => {
    return {
        userList
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        wagesListReset,
        setWagesFilter,
        wagesFilterReset,
        fetchWagesList,
        fetchUserList
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WagesFilter);
