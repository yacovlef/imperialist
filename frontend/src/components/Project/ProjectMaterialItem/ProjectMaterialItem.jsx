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
            <div><span className="project_list_item__material_item_label">#: </span>{index}</div>
            <div><span className="project_list_item__material_item_label">Наименование: </span>{name}</div>
            <div><span className="project_list_item__material_item_label">Кол-во: </span>{quantity}</div>
            <div><span className="project_list_item__material_item_label">Ед. изм.: </span>{renderUnit.label}</div>
            <div><span className="project_list_item__material_item_label">Цена за ед.: </span>{price}</div>
            <div><span className="project_list_item__material_item_label">Цена итог.: </span>{price * quantity}</div>
            <div>
                <ProjectMaterialDelete
                    material={material}
                />
            </div>
        </>
    );
};

export default ProjectMaterialItem;
