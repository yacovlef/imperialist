import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import WagesFilter from './WagesFilter';

import { fetchWagesList } from '../WagesList/wages-list-action';

import { setWagesFilter, wagesFilterReset } from './wages-filter-action';
import { wagesListReset } from '../WagesList/wages-list-action';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        wagesListReset,
        setWagesFilter,
        wagesFilterReset,
        fetchWagesList
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(WagesFilter);
