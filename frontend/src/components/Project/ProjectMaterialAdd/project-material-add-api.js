import axios from '../../../config/axios';

const createProjectMaterialApi = async (material) => {
    return await axios.post('/materials', material);
};

export {
    createProjectMaterialApi
};
