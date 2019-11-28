import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import './project-material-delete.css';

class ProjectMaterialDelete extends Component {
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

        this.props.onSubmit(this.props.material.id);
    };

    render() {
        const { material: { id, Nomenclature: { name } }, loading, error } = this.props;
        
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
                        <Modal title="Удаление материала" size="small" onClose={this.handleButtonClose}>
                            <div className="project_material_delete__label form-row">
                                <b>{`${name} (#${id})`}</b>
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

export default ProjectMaterialDelete;
