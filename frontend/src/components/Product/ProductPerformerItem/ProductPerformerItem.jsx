import React from 'react';
import { Link } from 'react-router-dom';

import ProductPerformerDelete from '../ProductPerformerDelete';
import ProductPerformerPrint from '../ProductPerformerPrint';

import { roleList } from '../../../config/data.json';

import { formatPrice } from '../../../utils/lib';

const ProductPerformerItem = ({ performer, materialList, index }) => {
    const {
        id,
        interest,
        role,
        User: {
            firstName,
            lastName
        },
        Wages
    } = performer;
    
    const renderRole = roleList.find(({ value }) => value === role);

    //-------------------------------------------------------------------------------------------
    const material = materialList.reduce((value, item) => value + item.price * item.quantity, 0);

    const cost = material * 3;

    const withNds = cost * 20 / 120 + cost;

    const nds = cost * 20 / 120;

    const workCost = withNds - material - nds;

    const paidOut = Wages.reduce((value, item) => value + item.price, 0);

    const price = workCost * interest;

    const payOff = price - paidOut;

    //-------------------------------------------------------------------------------------------

    return (
        <>
            <div><span className="hide">#: </span>{++index}</div>
            <div><span className="hide">Исполнитель: </span><Link to={`/wages/?performer=${id}`}>{`${lastName} ${firstName}`}</Link></div>
            <div><span className="hide">Роль: </span>{renderRole.label}</div>
            <div><span className="hide">Ставка: </span>{interest} %</div>
            <div><span className="hide">Выплачено: </span>{formatPrice(paidOut)}</div>
            <div><span className="hide">К выплате: </span>{formatPrice(payOff)}</div>
            <div><span className="hide">Сумма: </span>{formatPrice(price)}</div>
            <div><ProductPerformerDelete performer={performer} /></div>
            <div><ProductPerformerPrint performer={performer} /></div>
        </>
    );
};

export default ProductPerformerItem;
