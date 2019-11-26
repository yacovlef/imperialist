import { fetchProjectList } from '../ProjectList/project-list-action';

const SET_PROJECT_FILTER_DATA = 'SET_PROJECT_FILTER_DATA';
const SET_PROJECT_FILTER_RESET = 'FETCH_PROJECT_FILTER_RESET';

const projectFilterSet = (projectFilter) => {
    return {
        type: SET_PROJECT_FILTER_DATA,
        payload: projectFilter
    };
};

const projectFilterReset = () => {
    return {
        type: SET_PROJECT_FILTER_RESET
    };
};

const setProjectFilter = (projectFilter) => (dispatch) => {
    dispatch(projectFilterSet(projectFilter));

    dispatch(fetchProjectList());
};

export {
    SET_PROJECT_FILTER_DATA,
    SET_PROJECT_FILTER_RESET,
    setProjectFilter,
    projectFilterReset
};
