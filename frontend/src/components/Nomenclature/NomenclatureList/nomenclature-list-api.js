import axios from '../../../config/axios';

const fetchNomenclatureListApi = async () => {
    return await axios.get('/nomenclature');
};

export {
    fetchNomenclatureListApi
};
