import { createProjectApi, updateProjectApi } from './project-form-api'

import { fetchProjectList } from '../ProjectList/project-list-action';

const SUBMIT_PROJECT_FORM_REQUEST = 'SUBMIT_PROJECT_FORM_REQUEST';
const SUBMIT_PROJECT_FORM_SUCCESS = 'SUBMIT_PROJECT_FORM_SUCCESS';
const SUBMIT_PROJECT_FORM_FAILURE = 'SUBMIT_PROJECT_FORM_FAILURE';

const projectFormRequested = () => {
    return {
        type: SUBMIT_PROJECT_FORM_REQUEST
    };
};

const projectFormLoaded = () => {
    return {
        type: SUBMIT_PROJECT_FORM_SUCCESS
    };
};

const projectFormError = (error) => {
    return {
        type: SUBMIT_PROJECT_FORM_FAILURE,
        payload: error
    };
};

const submitProjectFormCreate = (project) => (dispatch) => {
    dispatch(projectFormRequested());

    createProjectApi(project)
        .then(() => {
            dispatch(projectFormLoaded());
            dispatch(fetchProjectList());
        })
        .catch((error) => dispatch(projectFormError(error)));
};

const submitProjectFormUpdate = (project) => (dispatch) => {
    dispatch(projectFormRequested());

    updateProjectApi(project)
        .then(() => {
            dispatch(projectFormLoaded());
            dispatch(fetchProjectList());
        })
        .catch((error) => dispatch(projectFormError(error)));
};

export {
    SUBMIT_PROJECT_FORM_REQUEST,
    SUBMIT_PROJECT_FORM_SUCCESS,
    SUBMIT_PROJECT_FORM_FAILURE,
    submitProjectFormCreate,
    submitProjectFormUpdate
};
