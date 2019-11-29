import React from 'react';

import NomenclatureEdit from '../NomenclatureEdit';
import NomenclatureDelete from '../NomenclatureDelete';

import { nomenclatureUnitList } from '../../../config/data.json'

import { formatPrice } from '../../../utils/lib';

import './nomenclature-list-item.css';

const NomenclatureListItem = ({ nomenclatureItem }) => {
    const {
        id,
        name,
        unit,
        price
    } = nomenclatureItem;

    const renderUnit = nomenclatureUnitList.find(({ value }) => value === unit);

    return (
        <div className="nomenclature-list-item card">
            <div className="nomenclature-list-item__col">
                <div>#: {id}</div>
                <div>Наименование: {name}</div>
            </div>
            <div className="nomenclature-list-item__col">
                <div>Ед.изм.: {renderUnit.label}</div>
                <div>Цена: {formatPrice(price)}</div>
            </div>
            <div className="nomenclature-list-item__col">
                <div><NomenclatureEdit nomenclature={nomenclatureItem} /></div>
                <div><NomenclatureDelete nomenclature={nomenclatureItem} /></div>
            </div>
        </div>
    );
}

export default NomenclatureListItem;
