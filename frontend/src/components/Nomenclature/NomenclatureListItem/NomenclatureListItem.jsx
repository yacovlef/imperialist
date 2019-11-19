import React from 'react';

import NomenclatureEdit from '../NomenclatureEdit';
import NomenclatureDelete from '../NomenclatureDelete';

import { nomenclatureUnitList } from '../../../config/data.json'

import './nomenclature_list_item.css';

const NomenclatureListItem = ({ nomenclatureItem }) => {
    const {
        id,
        name,
        unit,
        price
    } = nomenclatureItem;

    const renderUnit = nomenclatureUnitList.find(({ value }) => value === unit);

    return (
        <div className="nomenclature_list_item card">
            <div>
                <div>#: {id}</div>
                <div>Наименование: {name}</div>
            </div>
            <div>
                <div>Ед.изм.: {renderUnit.label}</div>
                <div>Цена: {price}</div>
            </div>
            <div>
                <div>
                    <NomenclatureEdit
                        nomenclature={nomenclatureItem}
                    />
                </div>
                <div>
                    <NomenclatureDelete
                        nomenclature={nomenclatureItem}
                    />
                </div>
            </div>
        </div>
    );
}

export default NomenclatureListItem;
