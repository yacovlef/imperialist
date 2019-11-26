import React from 'react';

import Button from '../../@common/Button';

import { nomenclatureUnitList } from '../../../config/data.json';

const ProjectListItemMaterial = ({ material, index }) => {
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
            <div><span className="project_list_item__material_item_label">#: </span>{index}</div>
            <div><span className="project_list_item__material_item_label">Наименование: </span>{name}</div>
            <div><span className="project_list_item__material_item_label">Кол-во: </span>{quantity}</div>
            <div><span className="project_list_item__material_item_label">Ед. изм.: </span>{renderUnit.label}</div>
            <div><span className="project_list_item__material_item_label">Цена за ед.: </span>{price}</div>
            <div><span className="project_list_item__material_item_label">Цена итог.: </span>{price * quantity}</div>
            <div>
                <Button
                    label="Удалить"
                    type="button"
                    size="small"
                    onClick={() => {}}
                />
            </div>
        </>
    );
};

export default ProjectListItemMaterial;
