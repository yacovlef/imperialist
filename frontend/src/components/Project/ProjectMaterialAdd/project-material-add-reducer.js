import {
    SUBMIT_PROJECT_MATERIAL_ADD_REQUEST,
    SUBMIT_PROJECT_MATERIAL_ADD_SUCCESS,
    SUBMIT_PROJECT_MATERIAL_ADD_FAILURE,
} from './project-material-add-action';

const initialState = {
    loading: false,
    loaded: false,
    error: null,
};

const projectMaterialAddReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_PROJECT_MATERIAL_ADD_REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            };
        case SUBMIT_PROJECT_MATERIAL_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true
            };
        case SUBMIT_PROJECT_MATERIAL_ADD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default projectMaterialAddReducer;
