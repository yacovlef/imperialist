import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import './user-delete.css';

class UserDelete extends Component {
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

        this.props.onSubmit(this.props.user.id);
    };

    render() {
        const { user: { lastName, firstName }, loading, error } = this.props;

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
                        <Modal title="Удаление пользователя" onClose={this.handleButtonClose}>
                            <div className="user_delete__label form-row">
                                <b>{`${lastName} ${firstName}`}</b>
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

export default UserDelete;
