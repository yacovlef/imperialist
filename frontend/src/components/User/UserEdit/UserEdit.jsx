import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import UserForm from '../UserForm';

import { submitUserFormUpdate } from '../UserForm/user-form-action';

class UserAdd extends Component {
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
                        <Modal title="Редактирование пользователя" onClose={this.handleButtonClose}>
                            <UserForm
                                onSubmit={submitUserFormUpdate}
                                onClose={this.handleButtonClose}
                                user={this.props.user}
                            />
                        </Modal>
                }
            </>
        );
    }
}

export default UserAdd;
