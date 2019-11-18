import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import OrderForm from '../OrderForm';

import { submitOrderFormUpdate } from '../OrderForm/order-form-action';

class OrderEdit extends Component {
    state = {
        modal: false
    }

    handleButtonOpen = () => {
        this.setState({modal: true});
    }

    handleButtonClose = () => {
        this.setState({modal: false});
    }

    render() {
        return (
            <>
                <Button
                    label="Редактировать"
                    type="button"
                    size="small"
                    onClick={this.handleButtonOpen}
                />
                
                {
                    this.state.modal &&
                        <Modal title="Редактирование заказа" onClose={this.handleButtonClose}>
                            <OrderForm
                                onSubmit={submitOrderFormUpdate}
                                onClose={this.handleButtonClose}
                                order={this.props.order}
                            />
                        </Modal>
                }
            </>
        );
    }
}

export default OrderEdit;
