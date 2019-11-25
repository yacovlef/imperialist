import axios from '../../../config/axios';

const deleteProjectApi = async (id) => {
    return await axios.delete(`/projects/${id}`);
};

export {
    deleteProjectApi
};
