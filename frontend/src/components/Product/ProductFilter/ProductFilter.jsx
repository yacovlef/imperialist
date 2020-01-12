import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import Input from '../../@common/Input';
import Select from '../../@common/Select';

import { productStatusList } from '../../../config/data.json';

import './product-filter.css';

class ProductFilter extends Component {
    state = {
        id: '',
        ProjectId: '',
        status: ''
    }

    componentDidMount() {

        const { id, project: ProjectId } = queryString.parse(this.props.location.search);

        const find = {};

        if (id) {
            find.id = id;
        }

        if (ProjectId) {
            find.ProjectId = ProjectId;
        }

        if (Object.keys(find).length) {
            this.setState(find);
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
                        label="#"
                        name="id"
                        type="text"
                        value={this.state.id}
                        handleChange={this.handleChange}
                    />
                </div>

                <div>
                    <Input
                        label="# Проекта"
                        name="ProjectId"
                        type="text"
                        value={this.state.ProjectId}
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
