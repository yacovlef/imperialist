import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import { formatPrice } from '../../../utils/lib';

import './wages-delete.css';

class WagesDelete extends Component {
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

        this.props.onSubmit(this.props.wages.id);
    };

    render() {
        const {
            wages: {
                price,
                Performer: {
                    User: {
                        lastName,
                        firstName
                    }
                }
            },
            loading,
            error } = this.props;

        console.log(this.props);

        return (
            <>
                <Button
                    label="Удалить"
                    type="button"
                    size="small"
                    onClick={this.handleButtonOpen}
                />
                
                {
                    this.state.modal &&
                        <Modal title="Удаление зарплаты" size="small" onClose={this.handleButtonClose}>
                            <div className="wages_delete__label form-row">
                                <b>{`${formatPrice(price)} (${lastName} ${firstName})`}</b>
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

export default WagesDelete;
