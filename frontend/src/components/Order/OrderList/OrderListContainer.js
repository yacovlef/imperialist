import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchOrderList } from './order-list-action';

import OrderList from './OrderList';

const mapStateToProps = ({ orderList: { orderList, loading, error } }) => {
    return {
        orderList,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchOrderList
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
