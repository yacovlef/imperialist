import { deleteUserApi } from './user-delete-api';

import { fetchUserList } from '../UserList/user-list-action';

const SUBMIT_USER_DELETE_REQUEST = 'SUBMIT_USER_DELETE_REQUEST';
const SUBMIT_USER_DELETE_SUCCESS = 'SUBMIT_USER_DELETE_SUCCESS';
const SUBMIT_USER_DELETE_FAILURE = 'SUBMIT_USER_DELETE_FAILURE';

const userDeleteRequested = () => {
    return {
        type: SUBMIT_USER_DELETE_REQUEST
    };
};

const userDeleteLoaded = () => {
    return {
        type: SUBMIT_USER_DELETE_SUCCESS
    };
};

const userDeleteError = (error) => {
    return {
        type: SUBMIT_USER_DELETE_FAILURE,
        payload: error
    };
};

const submitUserDelete = (id) => (dispatch) => {
    dispatch(userDeleteRequested());

    deleteUserApi(id)
        .then(() => {
            dispatch(userDeleteLoaded());
            dispatch(fetchUserList());
        })
        .catch((error) => dispatch(userDeleteError(error)));
};

export {
    SUBMIT_USER_DELETE_REQUEST,
    SUBMIT_USER_DELETE_SUCCESS,
    SUBMIT_USER_DELETE_FAILURE,
    submitUserDelete
};
