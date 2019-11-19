import { fetchNomenclatureListApi } from './nomenclature-list-api';

const FETCH_NOMENCLATURE_LIST_REQUEST = 'FETCH_NOMENCLATURE_LIST_REQUEST';
const FETCH_NOMENCLATURE_LIST_SUCCESS = 'FETCH_NOMENCLATURE_LIST_SUCCESS';
const FETCH_NOMENCLATURE_LIST_FAILURE = 'FETCH_NOMENCLATURE_LIST_FAILURE';

const nomenclatureListRequested = () => {
    return {
        type: FETCH_NOMENCLATURE_LIST_REQUEST
    };
};

const nomenclatureListLoaded = (nomenclatureList) => {
    return {
        type: FETCH_NOMENCLATURE_LIST_SUCCESS,
        payload: nomenclatureList
    };
};

const nomenclatureListError = (error) => {
    return {
        type: FETCH_NOMENCLATURE_LIST_FAILURE,
        payload: error
    };
};

const fetchNomenclatureList = () => (dispatch) => {
    dispatch(nomenclatureListRequested());

    fetchNomenclatureListApi()
        .then(({ data }) => dispatch(nomenclatureListLoaded(data)))
        .catch((error) => dispatch(nomenclatureListError(error)));
};

export {
    FETCH_NOMENCLATURE_LIST_REQUEST,
    FETCH_NOMENCLATURE_LIST_SUCCESS,
    FETCH_NOMENCLATURE_LIST_FAILURE,
    fetchNomenclatureList
};
