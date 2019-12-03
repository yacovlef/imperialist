import {
    SET_PROJECT_FILTER_DATA
} from './project-filter-action';

const initialState = {
    status: ''
};

const projectFilterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROJECT_FILTER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default projectFilterReducer;
