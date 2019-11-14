import axios from '../../../config/axios';

const fetchUserListApi = async () => {
    return await axios.get('/users');
};

export {
    fetchUserListApi
};
