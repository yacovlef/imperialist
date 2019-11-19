import axios from '../../../config/axios';

const createNomenclatureApi = async (nomenclature) => {
    return await axios.post('/nomenclature', nomenclature);
};

const updateNomenclatureApi = async (nomenclature) => {
    return await axios.put(`/nomenclature/${nomenclature.id}`, nomenclature);
};

export {
    createNomenclatureApi,
    updateNomenclatureApi
};
