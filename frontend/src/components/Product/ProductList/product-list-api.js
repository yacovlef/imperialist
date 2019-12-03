import axios from '../../../config/axios';

const fetchProductListApi = async (productFilter) => {
    return await axios.get('/products', {params: productFilter});
};

export {
    fetchProductListApi
};
