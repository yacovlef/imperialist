import React from 'react';

import { formatPrice } from '../../../utils/lib';

import './product-calc.css';

const ProductCalc = ({ materialList, performerList }) => {

    const material = materialList.reduce((value, item) => value + item.price * item.quantity, 0);

    const cost = material * 3;

    const withNds = cost * 20 / 120 + cost;

    const nds = cost * 20 / 120;

    const workCost = withNds - material - nds;

    const priceTotalPerformer = performerList.reduce((value, { interest }) => value + workCost * interest, 0);

    const margin = workCost - priceTotalPerformer;

    return (
        <div className="product-calc">
            <div>Товар: {formatPrice(material)}</div>
            <div>x 3: {formatPrice(cost)}</div>
            <div>C НДС: {formatPrice(withNds)}</div>
            <div>НДС: {formatPrice(nds)}</div>
            <div>Минус товар и НДС: {formatPrice(workCost)}</div>
            <div>Работа: {formatPrice(priceTotalPerformer)}</div>
            <div>Моржа: {formatPrice(margin)}</div>
        </div>
    );
};

export default ProductCalc;
