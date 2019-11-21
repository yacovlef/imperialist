import axios from '../../../config/axios';

const fetchProjectListApi = async (orderId) => {
    return await axios.get(`/projects/${orderId}`,);
};

export {
    fetchProjectListApi
};
