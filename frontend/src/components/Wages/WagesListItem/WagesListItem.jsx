import React from 'react';
import moment from 'moment';

import WagesEdit from '../WagesEdit';
import WagesDelete from '../WagesDelete';

import { formatPrice } from '../../../utils/lib';

import './wages-list-item.css';

const WagesListItem = ({ wagesItem }) => {
    const {
        price,
        createdAt,
        Performer: {
            Product: {
                name: productName,
                Project: {
                    title: projectTitle
                }
            },
            User: {
                firstName,
                lastName
            }
        }
    } = wagesItem;

    return (
        <div className="wages-list-item card">
            <div className="wages-list-item__col">
                <div>Проект: {projectTitle}</div>
                <div>Изделие: {productName}</div>
            </div>
            <div className="wages-list-item__col">
                <div>Исполнитель: {`${lastName} ${firstName}`}</div>
                <div>Дата: {moment(createdAt).format('DD-MM-YYYY HH:mm')}</div>
            </div>
            <div className="wages-list-item__col">
                <div>Выплачено: {formatPrice(price)}</div>
            </div>
            <div className="wages-list-item__col">
                <div><WagesEdit wages={wagesItem} /></div>
                <div><WagesDelete wages={wagesItem} /></div>
            </div>
        </div>
    );
}

export default WagesListItem;
