import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import OrderForm from '../OrderForm';

import { submitOrderFormCreate } from '../OrderForm/order-form-action';

import './order-add.css';

class OrderAdd extends Component {
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
                <div className="order_add__button">
                    <Button
                        label="Добавить заказ"
                        type="button"
                        size="block"
                        onClick={this.handleButtonOpen}
                    />
                </div>
                
                {
                    this.state.modal &&
                        <Modal title="Добавление заказа" onClose={this.handleButtonClose}>
                            <OrderForm
                                onSubmit={submitOrderFormCreate}
                                onClose={this.handleButtonClose}
                            />
                        </Modal>
                }
            </>
        );
    }
}

export default OrderAdd;
