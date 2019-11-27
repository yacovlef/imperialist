import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import OrderEdit from '../OrderEdit';
import OrderDelete from '../OrderDelete';

import { orderStatusList } from '../../../config/data.json'

import './order_list_item.css';

const OrderListItem = ({ orderItem }) => {
    const {
        id,
        title,
        status,
        createdAt
    } = orderItem;

    const renderStatus = orderStatusList.find(({ value }) => value === status);

    return (
        <div className="order_list_item card">
            <div>#: {id}</div>
            <div>Статус: {renderStatus.label}</div>
            <div><OrderEdit order={orderItem} /></div>
            
            <div>Название: <Link to={`/projects/${id}`}>{title}</Link></div>
            <div>Создан: {moment(createdAt).format('DD-MM-YYYY HH:mm')}</div>
            <div><OrderDelete order={orderItem}/></div>
        </div>
    );
}

export default OrderListItem;
