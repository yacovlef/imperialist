import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import OrderEdit from '../OrderEdit';
import OrderDelete from '../OrderDelete';

import { orderStatusList } from '../../../config/data.json'

import './order-list-item.css';

const OrderListItem = ({ orderItem }) => {
    const {
        id,
        title,
        status,
        createdAt
    } = orderItem;

    const renderStatus = orderStatusList.find(({ value }) => value === status);

    return (
        <div className="order-list-item card">
            <div className="order-list-item__col">
                <div>#: {id}</div>
                <div>Название: <Link to={`/projects/${id}`}>{title}</Link></div>
            </div>

            <div className="order-list-item__col">
                <div>Статус: {renderStatus.label}</div>
                <div>Создан: {moment(createdAt).format('DD-MM-YYYY HH:mm')}</div>
            </div>

            <div className="order-list-item__col">
                <div><OrderEdit order={orderItem} /></div>
                <div><OrderDelete order={orderItem}/></div>
            </div>
        </div>
    );
}

export default OrderListItem;
