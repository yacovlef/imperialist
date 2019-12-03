import React, {Component} from 'react';

import Select from '../../@common/Select';
import Input from '../../@common/Input';
import Button from '../../@common/Button';

import './product-material-add.css';

class ProductMaterialAdd extends Component {
    initialData = {
        NomenclatureId: '',
        quantity: '',
        price: ''
    };

    state = {
        data: {
            ProductId: '',
            ...this.initialData
        },
        errorList: []
    };

    componentDidMount() {
        const {fetchNomenclatureList, ProductId} = this.props;
        
        fetchNomenclatureList();

        if (ProductId) {
            this.setState(({ data }) => ({data: {...data, ProductId}}));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data.NomenclatureId !== this.state.data.NomenclatureId && this.state.data.NomenclatureId) {
            const { price } = this.props.nomenclatureList.find((nomenclature) => nomenclature.id === +this.state.data.NomenclatureId);

            this.setState(({ data }) => ({data: {...data, price}}));
        }

    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState(({ data }) => ({data: {...data, [name]: value}}));
    };

    handleValidateSubmit = () => {
        const {
            NomenclatureId,
            quantity
        } = this.state.data;

        const messageRequired = 'Обязательно';

        let errorList = [];

        if (!NomenclatureId) {
            errorList.push({
                field: 'NomenclatureId',
                message: messageRequired
            });
        }

        if (!quantity) {
            errorList.push({
                field: 'quantity',
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
            this.props.submitProductMaterialAddCreate(this.state.data);

            this.setState(({ data }) => ({data: {...data, ...this.initialData}}));
        }
    };

    render() {
        const { nomenclatureList, loading, error } = this.props;

        return (
            <div className="product-material-add">
                <div className="product-material-add__nomenclature">
                    <Select
                        placeholder="Номенклатура"
                        name="NomenclatureId"
                        theme="light"
                        value={this.state.data.NomenclatureId}
                        optionList={nomenclatureList.map(({id, name}) => ({label: name, value: id}))}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>
                <div className="product-material-add__quantity">
                    <Input
                        placeholder="Кол-во"
                        name="quantity"
                        type="text"
                        theme="light"
                        value={this.state.data.quantity}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>
                <div className="product-material-add__button">
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

export default ProductMaterialAdd;
