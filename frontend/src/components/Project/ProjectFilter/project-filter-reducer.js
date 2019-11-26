import {
    SET_PROJECT_FILTER_DATA,
    SET_PROJECT_FILTER_RESET
} from './project-filter-action';

const initialState = {
    OrderId: null,
    status: ''
};

const projectFilterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROJECT_FILTER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SET_PROJECT_FILTER_RESET:
            return initialState;
        default:
            return state;
    }
};

export default projectFilterReducer;
