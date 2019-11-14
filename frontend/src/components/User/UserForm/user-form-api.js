import axios from '../../../config/axios';

const createUserApi = async (user) => {
    return await axios.post('/users', user);
};

const updateUserApi = async (user) => {
    return await axios.put(`/users/${user.id}`, user);
};

export {
    createUserApi,
    updateUserApi
};
