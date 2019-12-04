import React, {Component} from 'react';

import Select from '../../@common/Select';
import Button from '../../@common/Button';

import { roleList } from '../../../config/data.json';

import './product-performer-add.css';

class ProductPerformerAdd extends Component {
    initialData = {
        UserId: '',
        interest: ''
    };

    state = {
        data: {
            ProductId: '',
            ...this.initialData
        },
        errorList: []
    };

    componentDidMount() {
        const {fetchUserList, ProductId} = this.props;
        
        fetchUserList();

        if (ProductId) {
            this.setState(({ data }) => ({data: {...data, ProductId}}));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data.UserId !== this.state.data.UserId && this.state.data.UserId) {
            const { interest } = this.props.userList.find((user) => user.id === +this.state.data.UserId);

            this.setState(({ data }) => ({data: {...data, interest}}));
        }

    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState(({ data }) => ({data: {...data, [name]: value}}));
    };

    handleValidateSubmit = () => {
        const {
            UserId
        } = this.state.data;

        const messageRequired = 'Обязательно';

        let errorList = [];

        if (!UserId) {
            errorList.push({
                field: 'UserId',
                message: messageRequired
            });
        }

        this.setState({errorList});

        const result = !errorList.length

        return result;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.handleValidateSubmit()) {
            this.props.submitProductPerformerAddCreate(this.state.data);

            this.setState(({ data }) => ({data: {...data, ...this.initialData}}));
        }
    };

    selectOptionUserList = () => {
        return this.props.userList.map(({ id, firstName, lastName, role }) => {
            const renderRole = roleList.find(({ value }) => value === role);

            return {
                label: `${lastName} ${firstName} (${renderRole.label})`,
                value: id
            };
        });
    };

    render() {
        const { loading, error } = this.props;



        return (
            <div className="product-performer-add">
                <div className="product-performer-add__user">
                    <Select
                        placeholder="Исполнитель"
                        name="UserId"
                        theme="light"
                        value={this.state.data.UserId}
                        optionList={this.selectOptionUserList()}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>

                <div className="product-performer-add__button">
                    <Button
                        label="Добавить"
                        type="submit"
                        size="small"
                        theme="light"
                        loading={loading}
                        error={error}
                        onClick={this.handleSubmit}
                    />
                </div>
            </div>
        );
    }
}

export default ProductPerformerAdd;
