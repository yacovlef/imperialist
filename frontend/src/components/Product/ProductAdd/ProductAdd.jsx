import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import ProductForm from '../ProductForm';

import { submitProductFormCreate } from '../ProductForm/product-form-action';

class ProductAdd extends Component {
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
        const { OrderId } = this.props;

        return (
            <>
                <div>
                    <Button
                        label="Добавить проект"
                        type="button"
                        size="block"
                        onClick={this.handleButtonOpen}
                        disabled={!OrderId}
                    />
                </div>
                
                {
                    this.state.modal &&
                        <Modal title="Добавление проекта" onClose={this.handleButtonClose}>
                            <ProductForm
                                onSubmit={submitProductFormCreate}
                                onClose={this.handleButtonClose}
                                OrderId={OrderId}
                            />
                        </Modal>
                }
            </>
        );
    }
}

export default ProductAdd;
