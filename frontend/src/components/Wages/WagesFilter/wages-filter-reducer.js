import {
    SET_WAGES_FILTER_DATA,
    SET_WAGES_FILTER_RESET
} from './wages-filter-action';

const initialState = {
    ProjectId: null,
    UserId: null,
    startDate: null,
    endDate: null
};

const wagesFilterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WAGES_FILTER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SET_WAGES_FILTER_RESET:
            return initialState;
        default:
            return state;
    }
};

export default wagesFilterReducer;
