import axios from '../../../config/axios';

const deleteProjectMaterialApi = async (id) => {
    return await axios.delete(`/materials/${id}`);
};

export {
    deleteProjectMaterialApi
};
