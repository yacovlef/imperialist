import React, { Component } from 'react';

import Info from '../../@common/Info';
import ProductListItem from '../ProductListItem';

class ProductList extends Component {
    render() {
        const { productList, error } = this.props;
        
        if (error) {
            return <Info
                type='error'
            />;
        }

        if (!productList.length) {
            return <Info
                message='Проектов не найдено.'
            />;
        }
        
        return productList.map(
            (productItem) => {
                return <ProductListItem
                    key={productItem.id}
                    productItem={productItem}
                />
            }
        )
    }
}

export default ProductList;
