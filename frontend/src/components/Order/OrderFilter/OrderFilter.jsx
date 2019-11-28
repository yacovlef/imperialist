import React, { Component } from 'react';

import Select from '../../@common/Select';

import { orderStatusList } from '../../../config/data.json';

import './order-filter.css';

class OrderFilter extends Component {
    state = {
        status: ''
    }

    componentDidMount() {
        this.setState({ ...this.props.orderFilter });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.setOrderFilter(this.state);
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="order_filter control__column">
                <Select
                    label="Статус"
                    name="status"
                    value={this.state.status}
                    optionList={orderStatusList}
                    handleChange={this.handleChange}
                />
            </div>
        );

    }
}

export default OrderFilter;
