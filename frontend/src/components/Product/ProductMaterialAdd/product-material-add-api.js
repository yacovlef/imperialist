import axios from '../../../config/axios';

const createProductMaterialApi = async (material) => {
    return await axios.post('/materials', material);
};

export {
    createProductMaterialApi
};
