import React from 'react';
import moment from 'moment';

import ProductEdit from '../ProductEdit';
import ProductDelete from '../ProductDelete';

import ProductMaterialAdd from '../ProductMaterialAdd';
import ProductMaterialItem from '../ProductMaterialItem'
import ProductMaterialCalc from '../ProductMaterialCalc'

import { productStatusList } from '../../../config/data.json'

import './product-list-item.css';

const ProductListItem = ({ productItem }) => {
    const {
        id,
        name,
        status,
        createdAt,
        Materials
    } = productItem;
    
    const renderStatus = productStatusList.find(({ value }) => value === status);

    return (
        <div className="product-list-item card">
            <div className="product-list-item__info">
                <div>Наименование: {name}</div>
                <div>Статус: {renderStatus.label}</div>
                <div>Создан: {moment(createdAt).format('DD-MM-YYYY HH:mm')}</div>
            </div>

            <ProductMaterialAdd ProductId={id} />

            {(!!Materials.length)
                ?
                    <>
                        <div className="product-material-item">
                            <div className="show">#</div>
                            <div className="show">Наименование</div>
                            <div className="show">Кол-во</div>
                            <div className="show">Ед. изм.</div>
                            <div className="show">Цена за ед.</div>
                            <div className="show">Цена итог.</div>
                            <div className="show"></div>

                            { Materials.map((material, index) => <ProductMaterialItem material={material} index={index} key={index} />) }

                        </div>
                        <ProductMaterialCalc materialList={Materials} />
                    </>
                :
                    <div className="product-list-item__not-nomenclature">Нет номенклатуры.</div>}
            <div className="product-list-item__action">
                <div><ProductEdit product={productItem} /></div>
                <div><ProductDelete product={productItem} /></div>
            </div>
        </div>
    );
}

export default ProductListItem;
