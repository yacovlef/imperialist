import axios from '../../../config/axios';

const createProductApi = async (product) => {
    return await axios.post('/products', product);
};

const updateProductApi = async (product) => {
    return await axios.put(`/products/${product.id}`, product);
};

export {
    createProductApi,
    updateProductApi
};
