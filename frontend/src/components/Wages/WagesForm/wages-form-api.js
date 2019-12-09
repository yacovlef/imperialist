import axios from '../../../config/axios';

const createWagesApi = async (wages) => {
    return await axios.post('/wagess', wages);
};

const updateWagesApi = async (wages) => {
    return await axios.put(`/wagess/${wages.id}`, wages);
};

export {
    createWagesApi,
    updateWagesApi
};
