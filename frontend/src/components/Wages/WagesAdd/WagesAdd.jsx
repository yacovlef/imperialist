import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import WagesForm from '../WagesForm';

import { submitWagesFormCreate } from '../WagesForm/wages-form-action';

class WagesAdd extends Component {
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
        const { PerformerId } = this.props;

        return (
            <>
                <div>
                    <Button
                        label="Выдать зарплату"
                        type="button"
                        size="block"
                        onClick={this.handleButtonOpen}
                        disabled={!PerformerId}
                    />
                </div>
                
                {
                    this.state.modal &&
                        <Modal title="Выдача зарплаты" onClose={this.handleButtonClose}>
                            <WagesForm
                                onSubmit={submitWagesFormCreate}
                                onClose={this.handleButtonClose}
                                ProjectId={PerformerId}
                            />
                        </Modal>
                }
            </>
        );
    }
}

export default WagesAdd;
