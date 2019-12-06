import React, {Component} from 'react';

import Input from '../../@common/Input';
import Select from '../../@common/Select';
import Button from '../../@common/Button';

import { roleList } from '../../../config/data.json';

import './user-form.css';

class UserForm extends Component {
    state = {
        data: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            role: '',
            interest: ''
        },
        errorList: []
    };

    componentDidMount() {
        if (this.props.user) {
            this.setState({data: {...this.props.user, password: ''}});
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
            firstName,
            lastName,
            email,
            password,
            role,
            interest
        } = this.state.data;

        const messageRequired = 'Обязательно';
        const messageNumber = 'Только цифры';

        let errorList = [];

        if (!firstName) {
            errorList.push({
                field: 'firstName',
                message: messageRequired
            });
        }

        if (!lastName) {
            errorList.push({
                field: 'lastName',
                message: messageRequired
            });
        }

        if (!email) {
            errorList.push({
                field: 'email',
                message: messageRequired
            });
        }

        if (!password && !this.props.user) {
            errorList.push({
                field: 'password',
                message: messageRequired
            });
        }

        if (!role) {
            errorList.push({
                field: 'role',
                message: messageRequired
            });
        }

        if (!(interest === null) && /\D/.test(interest)) {
            errorList.push({
                field: 'interest',
                message: messageNumber
            });
        }

        this.setState({errorList});

        const result = !errorList.length

        return result;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.handleValidateSubmit()) {
            const data = Object.assign({}, this.state.data);

            if (!data.password) {
                delete data.password;
            }

            if (data.interest === '') {
                data.interest = null;
            }

            this.props.onSubmit(data);
        }
    };

    render() {
        const { loading, error } = this.props;
        
        return (
            <form className="user-form" onSubmit={this.handleSubmit}>
                <div>
                    <Input
                        label="Имя"
                        name="firstName"
                        type="text"
                        value={this.state.data.firstName}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>

                <div>
                    <Input
                        label="Фамилия"
                        name="lastName"
                        type="text"
                        value={this.state.data.lastName}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>

                <div>
                    <Input
                        label="Адрес эл. почты"
                        name="email"
                        type="text"
                        value={this.state.data.email}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>
                
                <div>
                    <Input
                        label="Пароль"
                        name="password"
                        type="password"
                        value={this.state.data.password}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>

                <div>
                    <Select
                        label="Роль"
                        name="role"
                        value={this.state.data.role}
                        optionList={roleList}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>

                <div>
                    <Input
                        label="Ставка"
                        name="interest"
                        type="text"
                        value={(this.state.data.interest !== null) ? this.state.data.interest : ''}
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

export default UserForm;
