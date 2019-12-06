import React from 'react';

import ProductPerformerDelete from '../ProductPerformerDelete';

import { roleList } from '../../../config/data.json';

import { formatPrice } from '../../../utils/lib';

const ProductPerformerItem = ({ performer, materialList, index }) => {
    const {
        interest,
        role,
        User: {
            firstName,
            lastName
        }
    } = performer;
    
    const renderRole = roleList.find(({ value }) => value === role);

    //-------------------------------------------------------------------------------------------
    const material = materialList.reduce((value, item) => value + item.price * item.quantity, 0);

    const cost = material * 3;

    const withNds = cost * 20 / 120 + cost;

    const nds = cost * 20 / 120;

    const workCost = withNds - material - nds;

    const price = workCost * interest;
    //-------------------------------------------------------------------------------------------

    return (
        <>
            <div><span className="hide">#: </span>{++index}</div>
            <div><span className="hide">Исполнитель: </span>{`${lastName} ${firstName}`}</div>
            <div><span className="hide">Роль: </span>{renderRole.label}</div>
            <div><span className="hide">Ставка: </span>{interest} %</div>
            <div><span className="hide">Выдано: </span>{formatPrice(0)}</div>
            <div><span className="hide">К выдаче: </span>{formatPrice(price)}</div>
            <div><span className="hide">Сумма: </span>{formatPrice(price)}</div>
            <div><ProductPerformerDelete performer={performer} /></div>
        </>
    );
};

export default ProductPerformerItem;
