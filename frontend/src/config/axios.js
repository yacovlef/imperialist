import axios from 'axios';

import store from './redux';

import env from './env.json';

const { protocol, hostname } = window.location;

const instanceAxios = axios.create({
    baseURL: `${protocol}//${hostname}:${env.axios.port}/api/`
});

instanceAxios.interceptors.request.use((config) => {
    const user = store.getState().auth.user;

    if (user) {
        config.headers.Authorization = store.getState().auth.user.token;
    }

    return config;
});

export default instanceAxios;
