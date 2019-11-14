import axios from '../../../config/axios';

const deleteUserApi = async (id) => {
    return await axios.delete(`/users/${id}`);
};

export {
    deleteUserApi
};
