import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import ProjectForm from '../ProjectForm';

import { submitProjectFormCreate } from '../ProjectForm/project-form-action';

import './project-add.css';

class ProjectAdd extends Component {
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
                <div className="project_add__button">
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
                            <ProjectForm
                                onSubmit={submitProjectFormCreate}
                                onClose={this.handleButtonClose}
                                OrderId={OrderId}
                            />
                        </Modal>
                }
            </>
        );
    }
}

export default ProjectAdd;
