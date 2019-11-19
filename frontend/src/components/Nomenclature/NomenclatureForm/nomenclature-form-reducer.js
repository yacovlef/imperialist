import {
    SUBMIT_NOMENCLATURE_FORM_REQUEST,
    SUBMIT_NOMENCLATURE_FORM_SUCCESS,
    SUBMIT_NOMENCLATURE_FORM_FAILURE,
} from './nomenclature-form-action';

const initialState = {
    loading: false,
    loaded: false,
    error: null,
};

const nomenclatureFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_NOMENCLATURE_FORM_REQUEST:
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            };
        case SUBMIT_NOMENCLATURE_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true
            };
        case SUBMIT_NOMENCLATURE_FORM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default nomenclatureFormReducer;
