import axios from '../../../config/axios';

const deleteProductMaterialApi = async (id) => {
    return await axios.delete(`/materials/${id}`);
};

export {
    deleteProductMaterialApi
};
