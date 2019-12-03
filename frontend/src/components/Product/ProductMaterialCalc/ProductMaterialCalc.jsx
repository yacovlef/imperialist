import React from 'react';

import { formatPrice } from '../../../utils/lib';

import './product-material-calc.css';

const ProductMaterialCalc = ({ materialList }) => {

    const material = materialList.reduce((value, item) => value + item.price * item.quantity, 0);

    const cost = material * 3;

    const withNds = cost * 20 / 120 + cost;

    const nds = cost * 20 / 120;

    const workCost = withNds - material - nds;

    const carpenter = workCost * 0.2;

    const painter = workCost * 0.1;

    const product = workCost * 0.01;

    const margin = workCost - carpenter - painter;

    return (
        <>
            <div className="product-material-calc__common">
                <div>Товар: {formatPrice(material)}</div>
                <div>x 3: {formatPrice(cost)}</div>
                <div>C НДС: {formatPrice(withNds)}</div>
                <div>НДС: {formatPrice(nds)}</div>
                <div>Минус товар и НДС: {formatPrice(workCost)}</div>
            </div>
            <div className="product-material-calc__work">
                <div>Столяр: {formatPrice(carpenter)}</div>
                <div>Моляр: {formatPrice(painter)}</div>
                <div>Расчёт: {formatPrice(product)}</div>
                <div>Моржа: {formatPrice(margin)}</div>
            </div>
        </>
    );
};

export default ProductMaterialCalc;
