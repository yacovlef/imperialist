import React from 'react';

import ProductMaterialDelete from '../ProductMaterialDelete';

import { nomenclatureUnitList } from '../../../config/data.json';

import { formatPrice } from '../../../utils/lib';

const ProductMaterialItem = ({ material, index }) => {
    const {
        quantity,
        price,
        Nomenclature: {
            name,
            unit
        }
    } = material;

    const renderUnit = nomenclatureUnitList.find(({ value }) => value === unit);

    const priceTotal = price * quantity;

    return (
        <>
            <div><span className="hide">#: </span>{index}</div>
            <div><span className="hide">Наименование: </span>{name}</div>
            <div><span className="hide">Кол-во: </span>{quantity}</div>
            <div><span className="hide">Ед. изм.: </span>{renderUnit.label}</div>
            <div><span className="hide">Цена за ед.: </span>{formatPrice(price)}</div>
            <div><span className="hide">Цена итог.: </span>{formatPrice(priceTotal)}</div>
            <div><ProductMaterialDelete material={material} /></div>
        </>
    );
};

export default ProductMaterialItem;
