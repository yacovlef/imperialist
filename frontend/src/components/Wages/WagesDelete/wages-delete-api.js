import axios from '../../../config/axios';

const deleteWagesApi = async (id) => {
    return await axios.delete(`/wages/${id}`);
};

export {
    deleteWagesApi
};
