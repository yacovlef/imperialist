import React from 'react';

import ProjectMaterialDelete from '../ProjectMaterialDelete';

import { nomenclatureUnitList } from '../../../config/data.json';

const ProjectMaterialItem = ({ material, index }) => {
    const {
        quantity,
        price,
        Nomenclature: {
            name,
            unit
        }
    } = material;

    const renderUnit = nomenclatureUnitList.find(({ value }) => value === unit);

    return (
        <>
            <div><span className="hide">#: </span>{index}</div>
            <div><span className="hide">Наименование: </span>{name}</div>
            <div><span className="hide">Кол-во: </span>{quantity}</div>
            <div><span className="hide">Ед. изм.: </span>{renderUnit.label}</div>
            <div><span className="hide">Цена за ед.: </span>{price}</div>
            <div><span className="hide">Цена итог.: </span>{price * quantity}</div>
            <div><ProjectMaterialDelete material={material} /></div>
        </>
    );
};

export default ProjectMaterialItem;
