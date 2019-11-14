import axios from '../../config/axios';

const getLogin = async (user) => {
    return await axios.post('/login', user);
};

export {
    getLogin
};
