import axios from '../../../config/axios';

const fetchWagesListApi = async (wagesFilter) => {
    return await axios.get('/wages', {params: wagesFilter});
};

export {
    fetchWagesListApi
};
