import axios from '../../../config/axios';

const deleteNomenclatureApi = async (id) => {
    return await axios.delete(`/nomenclature/${id}`);
};

export {
    deleteNomenclatureApi
};
