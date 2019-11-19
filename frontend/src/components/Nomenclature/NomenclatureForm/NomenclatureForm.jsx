import React, {Component} from 'react';

import Input from '../../@common/Input';
import Button from '../../@common/Button';
import Select from '../../@common/Select';

import { nomenclatureUnitList } from '../../../config/data.json';

class NomenclatureForm extends Component {
    state = {
        data: {
            name: '',
            unit: '',
            price: ''
        },
        errorList: []
    };

    componentDidMount() {
        if (this.props.nomenclature) {
            this.setState({ data: this.props.nomenclature });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.loaded !== prevProps.loaded) {
            if (this.props.loaded) {
                this.props.onClose();
            }
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState(({ data }) => ({data: {...data, [name]: value}}));
    };

    handleValidateSubmit = () => {
        const {
            name,
            unit,
            price
        } = this.state.data;

        const messageRequired = 'Обязательно';

        let errorList = [];

        if (!name) {
            errorList.push({
                field: 'name',
                message: messageRequired
            });
        }

        if (!unit) {
            errorList.push({
                field: 'unit',
                message: messageRequired
            });
        }

        if (!price) {
            errorList.push({
                field: 'price',
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
            this.props.onSubmit(this.state.data);
        }
    };

    render() {
        const { loading, error } = this.props;
        
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <Input
                        label="Наименование"
                        name="name"
                        type="text"
                        value={this.state.data.name}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>

                <div className="form-row">
                    <Select
                        label="Ед.изм."
                        name="unit"
                        value={this.state.data.unit}
                        optionList={nomenclatureUnitList}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>

                <div className="form-row">
                    <Input
                        label="Цена"
                        name="price"
                        type="text"
                        value={this.state.data.price}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>

                <div className="form-row">
                    <Button
                        label="Сохранить"
                        type="submit"
                        size="block"
                        loading={loading}
                        error={error}
                    />
                </div>
            </form>
        );
    }
}

export default NomenclatureForm;
