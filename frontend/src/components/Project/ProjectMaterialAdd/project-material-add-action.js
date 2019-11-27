import { createProjectMaterialApi } from './project-material-add-api'

import { fetchProjectList } from '../ProjectList/project-list-action';

const SUBMIT_PROJECT_MATERIAL_ADD_REQUEST = 'SUBMIT_PROJECT_MATERIAL_ADD_REQUEST';
const SUBMIT_PROJECT_MATERIAL_ADD_SUCCESS = 'SUBMIT_PROJECT_MATERIAL_ADD_SUCCESS';
const SUBMIT_PROJECT_MATERIAL_ADD_FAILURE = 'SUBMIT_PROJECT_MATERIAL_ADD_FAILURE';

const projectMaterialAddRequested = () => {
    return {
        type: SUBMIT_PROJECT_MATERIAL_ADD_REQUEST
    };
};

const projectMaterialAddLoaded = () => {
    return {
        type: SUBMIT_PROJECT_MATERIAL_ADD_SUCCESS
    };
};

const projectMaterialAddError = (error) => {
    return {
        type: SUBMIT_PROJECT_MATERIAL_ADD_FAILURE,
        payload: error
    };
};

const submitProjectMaterialAddCreate = (material) => (dispatch) => {
    dispatch(projectMaterialAddRequested());

    createProjectMaterialApi(material)
        .then(() => {
            dispatch(projectMaterialAddLoaded());
            dispatch(fetchProjectList());
        })
        .catch((error) => dispatch(projectMaterialAddError(error)));
};

export {
    SUBMIT_PROJECT_MATERIAL_ADD_REQUEST,
    SUBMIT_PROJECT_MATERIAL_ADD_SUCCESS,
    SUBMIT_PROJECT_MATERIAL_ADD_FAILURE,
    submitProjectMaterialAddCreate
};
