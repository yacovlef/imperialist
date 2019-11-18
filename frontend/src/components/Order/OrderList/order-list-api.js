import axios from '../../../config/axios';

const fetchOrderListApi = async () => {
    return await axios.get('/orders');
};

export {
    fetchOrderListApi
};
