import { fetchProjectList } from '../ProjectList/project-list-action';

const SET_PROJECT_FILTER_DATA = 'SET_PROJECT_FILTER_DATA';

const projectFilterSet = (projectFilter) => {
    return {
        type: SET_PROJECT_FILTER_DATA,
        payload: projectFilter
    };
};

const setProjectFilter = (projectFilter) => (dispatch) => {
    dispatch(projectFilterSet(projectFilter));

    dispatch(fetchProjectList());
};

export {
    SET_PROJECT_FILTER_DATA,
    setProjectFilter
};
