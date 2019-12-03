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
        const { ProjectId } = this.props;

        return (
            <>
                <div>
                    <Button
                        label="Добавить изделие"
                        type="button"
                        size="block"
                        onClick={this.handleButtonOpen}
                        disabled={!ProjectId}
                    />
                </div>
                
                {
                    this.state.modal &&
                        <Modal title="Добавление изделия" onClose={this.handleButtonClose}>
                            <ProductForm
                                onSubmit={submitProductFormCreate}
                                onClose={this.handleButtonClose}
                                ProjectId={ProjectId}
                            />
                        </Modal>
                }
            </>
        );
    }
}

export default ProductAdd;
