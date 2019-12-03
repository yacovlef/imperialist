import axios from '../../../config/axios';

const deleteProductApi = async (id) => {
    return await axios.delete(`/products/${id}`);
};

export {
    deleteProductApi
};
