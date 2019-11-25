import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import ProjectForm from '../ProjectForm';

import { submitProjectFormUpdate } from '../ProjectForm/project-form-action';

class ProjectEdit extends Component {
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
                            <ProjectForm
                                onSubmit={submitProjectFormUpdate}
                                onClose={this.handleButtonClose}
                                project={this.props.project}
                            />
                        </Modal>
                }
            </>
        );
    }
}

export default ProjectEdit;
