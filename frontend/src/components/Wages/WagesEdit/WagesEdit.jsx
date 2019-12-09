import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import WagesForm from '../WagesForm';

import { submitWagesFormUpdate } from '../WagesForm/wages-form-action';

class WagesEdit extends Component {
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
                        <Modal title="Редактирование изделия" onClose={this.handleButtonClose}>
                            <WagesForm
                                onSubmit={submitWagesFormUpdate}
                                onClose={this.handleButtonClose}
                                wages={this.props.wages}
                            />
                        </Modal>
                }
            </>
        );
    }
}

export default WagesEdit;
