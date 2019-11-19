import { createNomenclatureApi, updateNomenclatureApi } from './nomenclature-form-api'

import { fetchNomenclatureList } from '../NomenclatureList/nomenclature-list-action';

const SUBMIT_NOMENCLATURE_FORM_REQUEST = 'SUBMIT_NOMENCLATURE_FORM_REQUEST';
const SUBMIT_NOMENCLATURE_FORM_SUCCESS = 'SUBMIT_NOMENCLATURE_FORM_SUCCESS';
const SUBMIT_NOMENCLATURE_FORM_FAILURE = 'SUBMIT_NOMENCLATURE_FORM_FAILURE';

const nomenclatureFormRequested = () => {
    return {
        type: SUBMIT_NOMENCLATURE_FORM_REQUEST
    };
};

const nomenclatureFormLoaded = () => {
    return {
        type: SUBMIT_NOMENCLATURE_FORM_SUCCESS
    };
};

const nomenclatureFormError = (error) => {
    return {
        type: SUBMIT_NOMENCLATURE_FORM_FAILURE,
        payload: error
    };
};

const submitNomenclatureFormCreate = (nomenclature) => (dispatch) => {
    dispatch(nomenclatureFormRequested());

    createNomenclatureApi(nomenclature)
        .then(() => {
            dispatch(nomenclatureFormLoaded());
            dispatch(fetchNomenclatureList());
        })
        .catch((error) => dispatch(nomenclatureFormError(error)));
};

const submitNomenclatureFormUpdate = (nomenclature) => (dispatch) => {
    dispatch(nomenclatureFormRequested());

    updateNomenclatureApi(nomenclature)
        .then(() => {
            dispatch(nomenclatureFormLoaded());
            dispatch(fetchNomenclatureList());
        })
        .catch((error) => dispatch(nomenclatureFormError(error)));
};

export {
    SUBMIT_NOMENCLATURE_FORM_REQUEST,
    SUBMIT_NOMENCLATURE_FORM_SUCCESS,
    SUBMIT_NOMENCLATURE_FORM_FAILURE,
    submitNomenclatureFormCreate,
    submitNomenclatureFormUpdate
};
