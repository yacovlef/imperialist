
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderFilter from './OrderFilter';

import { setOrderFilter } from './order-filter-action';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setOrderFilter
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(OrderFilter);
