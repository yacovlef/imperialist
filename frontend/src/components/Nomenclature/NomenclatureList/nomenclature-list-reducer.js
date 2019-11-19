import {
    FETCH_NOMENCLATURE_LIST_REQUEST,
    FETCH_NOMENCLATURE_LIST_SUCCESS,
    FETCH_NOMENCLATURE_LIST_FAILURE
} from './nomenclature-list-action';

const initialState = {
    nomenclatureList: [],
    loading: false,
    error: null
};

const nomenclatureListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_NOMENCLATURE_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_NOMENCLATURE_LIST_SUCCESS:
            return {
                ...state,
                nomenclatureList: action.payload,
                loading: false
            };
        case FETCH_NOMENCLATURE_LIST_FAILURE:
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
