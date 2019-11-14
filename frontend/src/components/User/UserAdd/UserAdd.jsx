import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import UserForm from '../UserForm';

import { submitUserFormCreate } from '../UserForm/user-form-action';

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
                <div className="card card__control">
                    <Button
                        label="Добавить пользователя"
                        type="button"
                        onClick={this.handleButtonOpen}
                    />
                </div>

                {
                    this.state.modal &&
                        <Modal title="Добавление пользователя" onClose={this.handleButtonClose}>
                            <UserForm
                                onSubmit={submitUserFormCreate}
                                onClose={this.handleButtonClose}
                            />
                        </Modal>
                }
            </>
        );
    }
}

export default UserAdd;
