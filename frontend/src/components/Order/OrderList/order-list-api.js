import axios from '../../../config/axios';

const fetchOrderListApi = async (orderFilter) => {
    return await axios.get('/orders', {params: orderFilter});
};

export {
    fetchOrderListApi
};
