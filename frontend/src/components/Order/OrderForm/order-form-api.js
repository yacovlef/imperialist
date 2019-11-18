import axios from '../../../config/axios';

const createOrderApi = async (order) => {
    return await axios.post('/orders', order);
};

const updateOrderApi = async (order) => {
    return await axios.put(`/orders/${order.id}`, order);
};

export {
    createOrderApi,
    updateOrderApi
};
