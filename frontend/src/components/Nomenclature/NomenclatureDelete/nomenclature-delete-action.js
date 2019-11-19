import { deleteNomenclatureApi } from './nomenclature-delete-api';

import { fetchNomenclatureList } from '../NomenclatureList/nomenclature-list-action';

const SUBMIT_NOMENCLATURE_DELETE_REQUEST = 'SUBMIT_NOMENCLATURE_DELETE_REQUEST';
const SUBMIT_NOMENCLATURE_DELETE_SUCCESS = 'SUBMIT_NOMENCLATURE_DELETE_SUCCESS';
const SUBMIT_NOMENCLATURE_DELETE_FAILURE = 'SUBMIT_NOMENCLATURE_DELETE_FAILURE';

const nomenclatureDeleteRequested = () => {
    return {
        type: SUBMIT_NOMENCLATURE_DELETE_REQUEST
    };
};

const nomenclatureDeleteLoaded = () => {
    return {
        type: SUBMIT_NOMENCLATURE_DELETE_SUCCESS
    };
};

const nomenclatureDeleteError = (error) => {
    return {
        type: SUBMIT_NOMENCLATURE_DELETE_FAILURE,
        payload: error
    };
};

const submitNomenclatureDelete = (id) => (dispatch) => {
    dispatch(nomenclatureDeleteRequested());

    deleteNomenclatureApi(id)
        .then(() => {
            dispatch(nomenclatureDeleteLoaded());
            dispatch(fetchNomenclatureList());
        })
        .catch((error) => dispatch(nomenclatureDeleteError(error)));
};

export {
    SUBMIT_NOMENCLATURE_DELETE_REQUEST,
    SUBMIT_NOMENCLATURE_DELETE_SUCCESS,
    SUBMIT_NOMENCLATURE_DELETE_FAILURE,
    submitNomenclatureDelete
};
