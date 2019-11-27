import { deleteProjectMaterialApi } from './project-material-delete-api';

import { fetchProjectList } from '../ProjectList/project-list-action';

const SUBMIT_PROJECT_MATERIAL_DELETE_REQUEST = 'SUBMIT_PROJECT_MATERIAL_DELETE_REQUEST';
const SUBMIT_PROJECT_MATERIAL_DELETE_SUCCESS = 'SUBMIT_PROJECT_MATERIAL_DELETE_SUCCESS';
const SUBMIT_PROJECT_MATERIAL_DELETE_FAILURE = 'SUBMIT_PROJECT_MATERIAL_DELETE_FAILURE';

const projectMaterialDeleteRequested = () => {
    return {
        type: SUBMIT_PROJECT_MATERIAL_DELETE_REQUEST
    };
};

const projectMaterialDeleteLoaded = () => {
    return {
        type: SUBMIT_PROJECT_MATERIAL_DELETE_SUCCESS
    };
};

const projectMaterialDeleteError = (error) => {
    return {
        type: SUBMIT_PROJECT_MATERIAL_DELETE_FAILURE,
        payload: error
    };
};

const submitProjectMaterialDelete = (id) => (dispatch) => {
    dispatch(projectMaterialDeleteRequested());

    deleteProjectMaterialApi(id)
        .then(() => {
            dispatch(projectMaterialDeleteLoaded());
            dispatch(fetchProjectList());
        })
        .catch((error) => dispatch(projectMaterialDeleteError(error)));
};

export {
    SUBMIT_PROJECT_MATERIAL_DELETE_REQUEST,
    SUBMIT_PROJECT_MATERIAL_DELETE_SUCCESS,
    SUBMIT_PROJECT_MATERIAL_DELETE_FAILURE,
    submitProjectMaterialDelete
};
