import axios from '../../../config/axios';

const createProductApi = async (product) => {
    return await axios.post('/products', product);
};

const updateProductApi = async (product) => {
    const id = product.get('id');
    
    return await axios.put(`/products/${id}`, product);
};

export {
    createProductApi,
    updateProductApi
};
