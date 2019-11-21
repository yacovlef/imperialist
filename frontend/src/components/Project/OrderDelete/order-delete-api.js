import axios from '../../../config/axios';

const deleteOrderApi = async (id) => {
    return await axios.delete(`/orders/${id}`);
};

export {
    deleteOrderApi
};
