import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import NomenclatureForm from '../NomenclatureForm';

import { submitNomenclatureFormUpdate } from '../NomenclatureForm/nomenclature-form-action';

class NomenclatureEdit extends Component {
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
                        <Modal title="Редактирование номенклатуры" onClose={this.handleButtonClose}>
                            <NomenclatureForm
                                onSubmit={submitNomenclatureFormUpdate}
                                onClose={this.handleButtonClose}
                                nomenclature={this.props.nomenclature}
                            />
                        </Modal>
                }
            </>
        );
    }
}

export default NomenclatureEdit;
