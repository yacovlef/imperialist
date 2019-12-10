import axios from '../../../config/axios';

const createWagesApi = async (wages) => {
    return await axios.post('/wages', wages);
};

const updateWagesApi = async (wages) => {
    return await axios.put(`/wages/${wages.id}`, wages);
};

export {
    createWagesApi,
    updateWagesApi
};
