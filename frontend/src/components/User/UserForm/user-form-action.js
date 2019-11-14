import { createUserApi, updateUserApi } from './user-form-api'

import { fetchUserList } from '../UserList/user-list-action';

const SUBMIT_USER_FORM_REQUEST = 'SUBMIT_USER_FORM_REQUEST';
const SUBMIT_USER_FORM_SUCCESS = 'SUBMIT_USER_FORM_SUCCESS';
const SUBMIT_USER_FORM_FAILURE = 'SUBMIT_USER_FORM_FAILURE';

const userFormRequested = () => {
    return {
        type: SUBMIT_USER_FORM_REQUEST
    };
};

const userFormLoaded = () => {
    return {
        type: SUBMIT_USER_FORM_SUCCESS
    };
};

const userFormError = (error) => {
    return {
        type: SUBMIT_USER_FORM_FAILURE,
        payload: error
    };
};

const submitUserFormCreate = (user) => (dispatch) => {
    dispatch(userFormRequested());

    createUserApi(user)
        .then(() => {
            dispatch(userFormLoaded());
            dispatch(fetchUserList());
        })
        .catch((error) => dispatch(userFormError(error)));
};

const submitUserFormUpdate = (user) => (dispatch) => {
    dispatch(userFormRequested());

    updateUserApi(user)
        .then(() => {
            dispatch(userFormLoaded());
            dispatch(fetchUserList());
        })
        .catch((error) => dispatch(userFormError(error)));
};

export {
    SUBMIT_USER_FORM_REQUEST,
    SUBMIT_USER_FORM_SUCCESS,
    SUBMIT_USER_FORM_FAILURE,
    submitUserFormCreate,
    submitUserFormUpdate
};
