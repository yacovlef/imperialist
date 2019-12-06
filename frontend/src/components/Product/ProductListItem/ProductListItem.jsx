import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import ProductEdit from '../ProductEdit';
import ProductDelete from '../ProductDelete';

import ProductMaterialAdd from '../ProductMaterialAdd';
import ProductMaterialItem from '../ProductMaterialItem';
import ProductMaterialCalc from '../ProductMaterialCalc';

import ProductPerformerAdd from '../ProductPerformerAdd';
import ProductPerformerItem from '../ProductPerformerItem';

import { productStatusList, productTabList } from '../../../config/data.json'

import './product-list-item.css';

class ProductListItem extends Component {
    state = {
        tab: 'material'
    };

    handleTabOpen = (tab) => this.setState({tab});

    render() {
        const { productItem } = this.props;
        
        const {
            id,
            name,
            status,
            createdAt,
            Materials,
            Performers
        } = productItem;

        const { tab } = this.state;
        
        const renderStatus = productStatusList.find(({ value }) => value === status);

        const renderMaterial = (
            <>
                <ProductMaterialAdd ProductId={id} />

                {!!Materials.length
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
            </>
        );

        const renderPerformer = (
            <>
                <ProductPerformerAdd ProductId={id} />

                {!!Performers.length
                    ?
                        <div className="product-performer-item">
                            <div className="show">#</div>
                            <div className="show">Исполнитель</div>
                            <div className="show">Роль</div>
                            <div className="show">Ставка</div>
                            <div className="show">Выдано</div>
                            <div className="show">К выдаче</div>
                            <div className="show">Сумма</div>
                            <div className="show"></div>
                            
                            { Performers.map((performer, index) => <ProductPerformerItem performer={performer} materialList={Materials} index={index} key={index} />) }

                        </div>
                    :
                        <div className="product-list-item__not-nomenclature">Нет исполнителей.</div>}
            </>
        );

        return (
            <div className="product-list-item card">
                <div className="product-list-item__tab">

                    {productTabList.map(({ label, value}, index) => (
                        <div key={index} className={(value === tab) ? 'product-list-item__tab-active' : ''}>
                            <Link onClick={() => this.handleTabOpen(value)} to="#">{label}</Link>
                        </div>))}

                </div>

                <div className="product-list-item__info">
                    <div>Наименование: {name}</div>
                    <div>Статус: {renderStatus.label}</div>
                    <div>Создан: {moment(createdAt).format('DD-MM-YYYY HH:mm')}</div>
                </div>

                {(tab === 'material') && renderMaterial}
                {(tab === 'performer') && renderPerformer}

                <div className="product-list-item__action">
                    <div><ProductEdit product={productItem} /></div>
                    <div><ProductDelete product={productItem} /></div>
                </div>
            </div>
        );
    };
}

export default ProductListItem;
