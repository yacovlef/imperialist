import store from '../../../config/redux';

import { fetchProjectListApi } from './project-list-api';

const FETCH_PROJECT_LIST_REQUEST = 'FETCH_PROJECT_LIST_REQUEST';
const FETCH_PROJECT_LIST_SUCCESS = 'FETCH_PROJECT_LIST_SUCCESS';
const FETCH_PROJECT_LIST_FAILURE = 'FETCH_PROJECT_LIST_FAILURE';
const FETCH_PROJECT_LIST_RESET = 'FETCH_PROJECT_LIST_RESET';

const projectListRequested = () => {
    return {
        type: FETCH_PROJECT_LIST_REQUEST
    };
};

const projectListLoaded = (projectList) => {
    return {
        type: FETCH_PROJECT_LIST_SUCCESS,
        payload: projectList
    };
};

const projectListError = (error) => {
    return {
        type: FETCH_PROJECT_LIST_FAILURE,
        payload: error
    };
};

const projectListReset = () => {
    return {
        type: FETCH_PROJECT_LIST_RESET
    };
};

const fetchProjectList = () => (dispatch) => {
    dispatch(projectListRequested());

    const { projectFilter } = store.getState();

    fetchProjectListApi(projectFilter)
        .then(({ data }) => dispatch(projectListLoaded(data)))
        .catch((error) => dispatch(projectListError(error)));
};

export {
    FETCH_PROJECT_LIST_REQUEST,
    FETCH_PROJECT_LIST_SUCCESS,
    FETCH_PROJECT_LIST_FAILURE,
    FETCH_PROJECT_LIST_RESET,
    projectListReset,
    fetchProjectList
};
