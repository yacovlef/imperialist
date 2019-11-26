import React, { Component } from 'react';

import Info from '../../@common/Info';
import OrderListItem from '../OrderListItem';

class UserList extends Component {
    componentDidMount() {
        this.props.fetchOrderList();
    }

    render() {
        const { orderList, error } = this.props;

        if (error) {
            return <Info
                type='error'
            />;
        }

        if (!orderList.length) {
            return <Info
                message='Заказов не найдено!'
            />;
        }

        return orderList.map(
            (orderItem) => {
                return <OrderListItem
                    key={orderItem.id}
                    orderItem={orderItem}
                />
            }
        )
    }
}

export default UserList;
