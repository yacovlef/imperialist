import axios from '../../../config/axios';

const deleteProductPerformerApi = async (id) => {
    return await axios.delete(`/performers/${id}`);
};

export {
    deleteProductPerformerApi
};
