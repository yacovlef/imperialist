import store from '../../../config/redux';

import { fetchWagesListApi } from './wages-list-api';

const FETCH_WAGES_LIST_REQUEST = 'FETCH_WAGES_LIST_REQUEST';
const FETCH_WAGES_LIST_SUCCESS = 'FETCH_WAGES_LIST_SUCCESS';
const FETCH_WAGES_LIST_FAILURE = 'FETCH_WAGES_LIST_FAILURE';
const FETCH_WAGES_LIST_RESET = 'FETCH_WAGES_LIST_RESET';

const wagesListRequested = () => {
    return {
        type: FETCH_WAGES_LIST_REQUEST
    };
};

const wagesListLoaded = (wagesList) => {
    return {
        type: FETCH_WAGES_LIST_SUCCESS,
        payload: wagesList
    };
};

const wagesListError = (error) => {
    return {
        type: FETCH_WAGES_LIST_FAILURE,
        payload: error
    };
};

const wagesListReset = () => {
    return {
        type: FETCH_WAGES_LIST_RESET
    };
};

const fetchWagesList = () => (dispatch) => {
    dispatch(wagesListRequested());

    const { wagesFilter } = store.getState();

    fetchWagesListApi(wagesFilter)
        .then(({ data }) => dispatch(wagesListLoaded(data)))
        .catch((error) => dispatch(wagesListError(error)));
};

export {
    FETCH_WAGES_LIST_REQUEST,
    FETCH_WAGES_LIST_SUCCESS,
    FETCH_WAGES_LIST_FAILURE,
    FETCH_WAGES_LIST_RESET,
    wagesListReset,
    fetchWagesList
};
