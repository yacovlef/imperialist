import React, {Component} from 'react';

import Select from '../../@common/Select';
import Input from '../../@common/Input';
import Button from '../../@common/Button';

import './project-material-add.css';

class ProjectMaterialAdd extends Component {
    state = {
        data: {
            ProjectId: '',
            NomenclatureId: '',
            quantity: '',
            price: ''
        },
        errorList: []
    };

    handleChange = (event) => {
        const { name, value } = event.target

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
            this.props.onSubmit(this.state.data);
        }
    };

    render() {
        const { loading, error } = this.props;
        
        return (
            <form onSubmit={this.handleSubmit} className="project-material-add">
                <div className="project-material-add__nomenclature">
                    <Select
                        name="NomenclatureId"
                        theme="light"
                        value={this.state.data.NomenclatureId}
                        optionList={
                            [
                                {
                                    label: 'МДФ',
                                    value: 1
                                },
                                {
                                    label: 'Направляющие',
                                    value: 2
                                },
                                {
                                    label: 'Шпонировка',
                                    value: 3
                                }
                              ]
                        }
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>
                <div className="project-material-add__quantity">
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
                <div>
                    <Button
                        label="Добавить"
                        type="submit"
                        size="small"
                        theme="light"
                        loading={loading}
                        error={error}
                    />
                </div>
            </form>
        );
    }
}

export default ProjectMaterialAdd;
