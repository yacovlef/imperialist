import React, {Component} from 'react';

import Modal from '../../@common/Modal';
import Button from '../../@common/Button';

import NomenclatureForm from '../NomenclatureForm';

import { submitNomenclatureFormCreate } from '../NomenclatureForm/nomenclature-form-action';

import './nomenclature-add.css';

class NomenclatureAdd extends Component {
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
                <div className="nomenclature_add__button">
                    <Button
                        label="Добавить номенклатуру"
                        type="button"
                        size="block"
                        onClick={this.handleButtonOpen}
                    />
                </div>

                {
                    this.state.modal &&
                        <Modal title="Добавление номенклатуры" onClose={this.handleButtonClose}>
                            <NomenclatureForm
                                onSubmit={submitNomenclatureFormCreate}
                                onClose={this.handleButtonClose}
                            />
                        </Modal>
                }
            </>
        );
    }
}

export default NomenclatureAdd;
