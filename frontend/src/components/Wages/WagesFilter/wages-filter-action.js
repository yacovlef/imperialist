import { fetchWagesList } from '../WagesList/wages-list-action';

const SET_WAGES_FILTER_DATA = 'SET_WAGES_FILTER_DATA';
const SET_WAGES_FILTER_RESET = 'FETCH_WAGES_FILTER_RESET';

const wagesFilterSet = (wagesFilter) => {
    return {
        type: SET_WAGES_FILTER_DATA,
        payload: wagesFilter
    };
};

const wagesFilterReset = () => {
    return {
        type: SET_WAGES_FILTER_RESET
    };
};

const setWagesFilter = (wagesFilter) => (dispatch) => {
    dispatch(wagesFilterSet(wagesFilter));

    dispatch(fetchWagesList());
};

export {
    SET_WAGES_FILTER_DATA,
    SET_WAGES_FILTER_RESET,
    setWagesFilter,
    wagesFilterReset
};
