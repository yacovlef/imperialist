import { createWagesApi, updateWagesApi } from './wages-form-api'

import { fetchWagesList } from '../WagesList/wages-list-action';

const SUBMIT_WAGES_FORM_REQUEST = 'SUBMIT_WAGES_FORM_REQUEST';
const SUBMIT_WAGES_FORM_SUCCESS = 'SUBMIT_WAGES_FORM_SUCCESS';
const SUBMIT_WAGES_FORM_FAILURE = 'SUBMIT_WAGES_FORM_FAILURE';

const wagesFormRequested = () => {
    return {
        type: SUBMIT_WAGES_FORM_REQUEST
    };
};

const wagesFormLoaded = () => {
    return {
        type: SUBMIT_WAGES_FORM_SUCCESS
    };
};

const wagesFormError = (error) => {
    return {
        type: SUBMIT_WAGES_FORM_FAILURE,
        payload: error
    };
};

const submitWagesFormCreate = (wages) => (dispatch) => {
    dispatch(wagesFormRequested());

    createWagesApi(wages)
        .then(() => {
            dispatch(wagesFormLoaded());
            dispatch(fetchWagesList());
        })
        .catch((error) => dispatch(wagesFormError(error)));
};

const submitWagesFormUpdate = (wages) => (dispatch) => {
    dispatch(wagesFormRequested());

    updateWagesApi(wages)
        .then(() => {
            dispatch(wagesFormLoaded());
            dispatch(fetchWagesList());
        })
        .catch((error) => dispatch(wagesFormError(error)));
};

export {
    SUBMIT_WAGES_FORM_REQUEST,
    SUBMIT_WAGES_FORM_SUCCESS,
    SUBMIT_WAGES_FORM_FAILURE,
    submitWagesFormCreate,
    submitWagesFormUpdate
};
