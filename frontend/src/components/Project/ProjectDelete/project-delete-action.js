import { deleteProjectApi } from './project-delete-api';

import { fetchProjectList } from '../ProjectList/project-list-action';

const SUBMIT_PROJECT_DELETE_REQUEST = 'SUBMIT_PROJECT_DELETE_REQUEST';
const SUBMIT_PROJECT_DELETE_SUCCESS = 'SUBMIT_PROJECT_DELETE_SUCCESS';
const SUBMIT_PROJECT_DELETE_FAILURE = 'SUBMIT_PROJECT_DELETE_FAILURE';

const projectDeleteRequested = () => {
    return {
        type: SUBMIT_PROJECT_DELETE_REQUEST
    };
};

const projectDeleteLoaded = () => {
    return {
        type: SUBMIT_PROJECT_DELETE_SUCCESS
    };
};

const projectDeleteError = (error) => {
    return {
        type: SUBMIT_PROJECT_DELETE_FAILURE,
        payload: error
    };
};

const submitProjectDelete = (id) => (dispatch) => {
    dispatch(projectDeleteRequested());

    deleteProjectApi(id)
        .then(() => {
            dispatch(projectDeleteLoaded());
            dispatch(fetchProjectList());
        })
        .catch((error) => dispatch(projectDeleteError(error)));
};

export {
    SUBMIT_PROJECT_DELETE_REQUEST,
    SUBMIT_PROJECT_DELETE_SUCCESS,
    SUBMIT_PROJECT_DELETE_FAILURE,
    submitProjectDelete
};
