import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import ProductForm from '../ProductForm';

import { submitProductFormUpdate } from '../ProductForm/product-form-action';

class ProductEdit extends Component {
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
                        <Modal title="Редактирование проекта" onClose={this.handleButtonClose}>
                            <ProductForm
                                onSubmit={submitProductFormUpdate}
                                onClose={this.handleButtonClose}
                                product={this.props.product}
                            />
                        </Modal>
                }
            </>
        );
    }
}

export default ProductEdit;
