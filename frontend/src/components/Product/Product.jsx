import React from 'react';

import ProductList from './ProductList';
import ProductAdd from './ProductAdd';
import ProductFilter from './ProductFilter';

import './product.css';

const Product = () => {
    return (
        <>
            <div className="product__control card card__control">
                <ProductAdd />
                <ProductFilter />
            </div>
            <ProductList />
        </>
    );
}

export default Product;
