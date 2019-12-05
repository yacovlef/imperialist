import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import { roleList } from '../../../config/data.json';

import './product-performer-delete.css';

class ProductPerformerDelete extends Component {
    state = {
        modal: false
    }

    componentDidUpdate(prevProps) {
        if (this.props.loaded !== prevProps.loaded) {
            if (this.props.loaded) {
                this.handleButtonClose();
            }
        }
    }

    handleButtonOpen = () => {
        this.setState({modal: true});
    }

    handleButtonClose = () => {
        this.setState({modal: false});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.props.performer.id);
    };

    render() {
        const { performer: { User: { firstName, lastName, role } }, loading, error } = this.props;
        
        const renderRole = roleList.find(({ value }) => value === role);

        return (
            <>
                <Button
                    label="Удалить"
                    type="button"
                    size="small"
                    theme="light"
                    onClick={this.handleButtonOpen}
                />
                
                {
                    this.state.modal &&
                        <Modal title="Удаление исполнителя" size="small" onClose={this.handleButtonClose}>
                            <div className="product-performer-delete__label form-row">
                                <b>{`${lastName} ${firstName} (${renderRole.label})`}</b>
                            </div>
                            <div className="form-row">
                                <form onSubmit={this.handleSubmit}>
                                    <Button
                                        label="Удалить"
                                        type="submit"
                                        size="block"
                                        loading={loading}
                                        error={error}
                                    />
                                </form>
                            </div>
                        </Modal>
                }
            </>
        );
    }
}

export default ProductPerformerDelete;
