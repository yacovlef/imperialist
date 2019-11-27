import React, {Component} from 'react';

import Input from '../../@common/Input';
import Button from '../../@common/Button';

import './order-form.css';

class OrderForm extends Component {
    state = {
        data: {
            title: '',
            status: 'inWork'
        },
        errorList: []
    };

    componentDidMount() {
        if (this.props.order) {
            this.setState({ data: this.props.order });
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
            title
        } = this.state.data;

        const messageRequired = 'Обязательно';

        let errorList = [];

        if (!title) {
            errorList.push({
                field: 'title',
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
            <form className="order_form" onSubmit={this.handleSubmit}>
                <div>
                    <Input
                        label="Название"
                        name="title"
                        type="text"
                        value={this.state.data.title}
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

export default OrderForm;
