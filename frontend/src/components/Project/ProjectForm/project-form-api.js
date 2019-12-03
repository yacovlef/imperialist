import axios from '../../../config/axios';

const createProjectApi = async (project) => {
    return await axios.post('/projects', project);
};

const updateProjectApi = async (project) => {
    return await axios.put(`/projects/${project.id}`, project);
};

export {
    createProjectApi,
    updateProjectApi
};
