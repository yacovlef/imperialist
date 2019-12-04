import axios from '../../../config/axios';

const createProductPerformerApi = async (performer) => {
    return await axios.post('/performers', performer);
};

export {
    createProductPerformerApi
};
