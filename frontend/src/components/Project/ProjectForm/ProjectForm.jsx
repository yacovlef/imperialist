import React, {Component} from 'react';

import Input from '../../@common/Input';
import Select from '../../@common/Select';
import Button from '../../@common/Button';

import { projectStatusList } from '../../../config/data.json';

import './project-form.css';

class ProjectForm extends Component {
    state = {
        data: {
            name: '',
            status: '',
            OrderId: ''
        },
        errorList: []
    };

    componentDidMount() {
        const {OrderId, project} = this.props;

        if (OrderId) {
            this.setState(({ data }) => ({data: {...data, OrderId}}));
        }

        if (project) {
            this.setState({ data: project });
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
            this.props.onSubmit(this.state.data);
        }
    };

    render() {
        const { loading, error } = this.props;
        
        return (
            <form className="project-form" onSubmit={this.handleSubmit}>
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
                        optionList={projectStatusList}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
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

export default ProjectForm;
