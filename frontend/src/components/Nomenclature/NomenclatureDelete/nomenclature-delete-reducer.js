import {
    SUBMIT_NOMENCLATURE_DELETE_REQUEST,
    SUBMIT_NOMENCLATURE_DELETE_SUCCESS,
    SUBMIT_NOMENCLATURE_DELETE_FAILURE,
} from './nomenclature-delete-action';

const initialState = {
    loading: false,
    loaded: false,
    error: null
};

const nomenclatureListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_NOMENCLATURE_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            };
        case SUBMIT_NOMENCLATURE_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true
            };
        case SUBMIT_NOMENCLATURE_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default nomenclatureListReducer;
