import React from 'react';

import { formatPrice } from '../../../utils/lib';

import './product-material-calc.css';

const ProductMaterialCalc = ({ materialList }) => {

    const material = materialList.reduce((value, item) => value + item.price * item.quantity, 0);

    const cost = material * 3;

    const withNds = cost * 20 / 120 + cost;

    const nds = cost * 20 / 120;

    const workCost = withNds - material - nds;

    return (
        <div className="product-material-calc__common">
            <div>Товар: {formatPrice(material)}</div>
            <div>x 3: {formatPrice(cost)}</div>
            <div>C НДС: {formatPrice(withNds)}</div>
            <div>НДС: {formatPrice(nds)}</div>
            <div>Минус товар и НДС: {formatPrice(workCost)}</div>
        </div>
    );
};

export default ProductMaterialCalc;
