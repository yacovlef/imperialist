import React, {Component} from 'react';

import Input from '../../@common/Input';
import Button from '../../@common/Button';

class UserForm extends Component {
    state = {
        data: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            role: 'admin'
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
            role
        } = this.state.data;

        const messageRequired = 'Обязательно';

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

        this.setState({errorList});

        const result = !errorList.length

        return result;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.handleValidateSubmit()) {
            const data = Object.assign({}, this.state.data);

            if (!this.state.data.password) {
                delete data.password;
            }

            this.props.onSubmit(data);
        }
    };

    render() {
        const { loading, error } = this.props;
        
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <Input
                        label="Имя"
                        name="firstName"
                        type="text"
                        value={this.state.data.firstName}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>

                <div className="form-row">
                    <Input
                        label="Фамилия"
                        name="lastName"
                        type="text"
                        value={this.state.data.lastName}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>

                <div className="form-row">
                    <Input
                        label="Адрес эл. почты"
                        name="email"
                        type="text"
                        value={this.state.data.email}
                        handleChange={this.handleChange}
                        errorList={this.state.errorList}
                    />
                </div>
                
                <div className="form-row">
                    <Input
                        label="Пароль"
                        name="password"
                        type="password"
                        value={this.state.data.password}
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

export default UserForm;
