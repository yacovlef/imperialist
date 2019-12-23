import React, {Component} from 'react';

import Input from '../../@common/Input';
import Select from '../../@common/Select';
import Button from '../../@common/Button';

import { productStatusList } from '../../../config/data.json';

import './product-form.css';

class ProductForm extends Component {
    state = {
        data: {
            name: '',
            status: '',
            ProjectId: ''
        },
        fileList: [],
        errorList: []
    };

    componentDidMount() {
        const { ProjectId, product } = this.props;

        if (ProjectId) {
            this.setState(({ data }) => ({data: {...data, ProjectId}}));
        }

        if (product) {
            this.setState({ data: product });
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
        let { name, value } = event.target;

        this.setState(({ data }) => ({data: {...data, [name]: value}}));
    };

    handleChangeFileList = (event) => {
        this.setState({ fileList: event.target.files });
    }

    handleValidateSubmit = () => {
        const {
            name,
            status
        } = this.state.data;

        const messageRequired = 'Обязательно';

        let errorList = [];

        if (!name) {
            errorList.push({
                field: 'name',
                message: messageRequired
            });
        }

        if (!status) {
            errorList.push({
                field: 'status',
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
            const { data: { id, name, status, ProjectId }, fileList } = this.state;

            const data = new FormData();

            if (id) {
                data.append('id', id);
            }

            data.append('name', name);
            data.append('status', status);
            data.append('ProjectId', ProjectId);

            data.append('image', fileList[0]);

            this.props.onSubmit(data);
        }
    };

    render() {
        const { loading, error } = this.props;
        
        return (
            <form className="product-form" onSubmit={this.handleSubmit}>
                <div>
                    <Input
                        label="Наименование"
                        name="name"
                        type="text"
                        value={this.state.data.name}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>

                <div>
                    <Select
                        label="Статус"
                        name="status"
                        value={this.state.data.status}
                        optionList={productStatusList}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>

                <div>
                    <Input
                        label="Изображение"
                        name="image"
                        type="file"
                        handleChange={this.handleChangeFileList}
                    />
                </div>

                <div>
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

export default ProductForm;
