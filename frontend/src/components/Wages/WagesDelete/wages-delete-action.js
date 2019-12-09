import { deleteWagesApi } from './wages-delete-api';

import { fetchWagesList } from '../WagesList/wages-list-action';

const SUBMIT_WAGES_DELETE_REQUEST = 'SUBMIT_WAGES_DELETE_REQUEST';
const SUBMIT_WAGES_DELETE_SUCCESS = 'SUBMIT_WAGES_DELETE_SUCCESS';
const SUBMIT_WAGES_DELETE_FAILURE = 'SUBMIT_WAGES_DELETE_FAILURE';

const wagesDeleteRequested = () => {
    return {
        type: SUBMIT_WAGES_DELETE_REQUEST
    };
};

const wagesDeleteLoaded = () => {
    return {
        type: SUBMIT_WAGES_DELETE_SUCCESS
    };
};

const wagesDeleteError = (error) => {
    return {
        type: SUBMIT_WAGES_DELETE_FAILURE,
        payload: error
    };
};

const submitWagesDelete = (id) => (dispatch) => {
    dispatch(wagesDeleteRequested());

    deleteWagesApi(id)
        .then(() => {
            dispatch(wagesDeleteLoaded());
            dispatch(fetchWagesList());
        })
        .catch((error) => dispatch(wagesDeleteError(error)));
};

export {
    SUBMIT_WAGES_DELETE_REQUEST,
    SUBMIT_WAGES_DELETE_SUCCESS,
    SUBMIT_WAGES_DELETE_FAILURE,
    submitWagesDelete
};
