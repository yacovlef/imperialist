import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import Input from '../@common/Input';
import Button from '../@common/Button';

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

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.handleValidateSubmit()) {
            this.props.login(this.state.data);
        }
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

    render() {
        const { user, loading, error} = this.props;

        if (user) {
            return <Redirect to="/" />;
        }

        return (
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">Вход</div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <Input
                                    label="Адрес эл. почты"
                                    name="email"
                                    type="text"
                                    value={this.state.data.email}
                                    handleChange={this.handleChange}
                                    errorList={this.state.errorList}
                                />
                                
                                <Input
                                    label="Пароль"
                                    name="password"
                                    type="password"
                                    value={this.state.data.password}
                                    handleChange={this.handleChange}
                                    errorList={this.state.errorList}
                                />

                                <Button
                                    label="Вход"
                                    type="submit"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;