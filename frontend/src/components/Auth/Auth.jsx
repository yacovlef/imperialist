import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import Input from '../@common/Input';
import Button from '../@common/Button';

import './auth.css';

class Auth extends PureComponent {
    state = {
        data: {
            email: '',
            password: ''
        },
        errorList: []
    };

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState(({ data }) => ({data: {...data, [name]: value}}));
    };

    handleValidateSubmit = () => {
        const {
            email,
            password
        } = this.state.data;

        const messageRequired = 'Обязательно';

        let errorList = [];

        if (!email) {
            errorList.push({
                field: 'email',
                message: messageRequired
            });
        }

        if (!password) {
            errorList.push({
                field: 'password',
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
            this.props.login(this.state.data);
        }
    };

    render() {
        const { user } = this.props;

        if (user) {
            return <Redirect to="/" />;
        }

        return (
            <div className="auth__layout">
                <form className="auth__form" onSubmit={this.handleSubmit}>
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
                            label="Вход"
                            type="submit"
                            size="block"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Auth;
