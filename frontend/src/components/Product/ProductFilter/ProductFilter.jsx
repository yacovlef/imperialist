import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Input from '../../@common/Input';
import Select from '../../@common/Select';

import { productStatusList } from '../../../config/data.json';

import './product-filter.css';

class ProductFilter extends Component {
    state = {
        OrderId: '',
        status: ''
    }

    componentDidMount() {
        const { OrderId } = this.props.match.params

        if (OrderId) {
            this.setState({OrderId});
        } else {
            this.props.fetchProductList();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.setProductFilter(this.state);
        }
    }

    componentWillUnmount() {
        this.props.productListReset();
        this.props.productFilterReset();
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="product-filter">
                <div>
                    <Input
                        label="# Заказа"
                        name="OrderId"
                        type="text"
                        value={this.state.OrderId}
                        handleChange={this.handleChange}
                    />
                </div>

                <div>
                    <Select
                        label="Статус"
                        name="status"
                        value={this.state.status}
                        optionList={productStatusList}
                        handleChange={this.handleChange}
                    />
                </div>
            </div>
        );

    }
}

export default withRouter(ProductFilter);
