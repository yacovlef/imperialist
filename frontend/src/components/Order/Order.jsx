import React from 'react';

import OrderList from './OrderList';
import OrderAdd from './OrderAdd';

const Order = () => {
    return (
        <>
            <OrderAdd />
            <OrderList />
        </>
    );
}

export default Order;
