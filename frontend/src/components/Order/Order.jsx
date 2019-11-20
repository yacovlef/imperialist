import React from 'react';

import OrderList from './OrderList';
import OrderAdd from './OrderAdd';
import OrderFilter from './OrderFilter';

import './order.css';

const Order = () => {
    return (
        <>
            <div className="order__control card card__control">
                <OrderAdd />
                <OrderFilter />
            </div>
            <OrderList />
        </>
    );
}

export default Order;
