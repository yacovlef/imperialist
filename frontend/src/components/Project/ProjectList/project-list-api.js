import axios from '../../../config/axios';

const fetchProjectListApi = async (projectFilter) => {
    return await axios.get('/projects', {params: projectFilter});
};

export {
    fetchProjectListApi
};
