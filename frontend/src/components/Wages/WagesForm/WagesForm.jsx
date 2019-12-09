import React, {Component} from 'react';

import Input from '../../@common/Input';
import Button from '../../@common/Button';

import './wages-form.css';

class WagesForm extends Component {
    state = {
        data: {
            price: '',
            PerformerId: ''
        },
        errorList: []
    };

    componentDidMount() {
        const {PerformerId, wages} = this.props;

        if (PerformerId) {
            this.setState(({ data }) => ({data: {...data, PerformerId}}));
        }

        if (wages) {
            this.setState({ data: wages });
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
            price
        } = this.state.data;

        const messageRequired = 'Обязательно';

        let errorList = [];

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
            <form className="wages-form" onSubmit={this.handleSubmit}>
                <div>
                    <Input
                        label="Сумма"
                        name="price"
                        type="text"
                        value={this.state.data.price}
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

export default WagesForm;
