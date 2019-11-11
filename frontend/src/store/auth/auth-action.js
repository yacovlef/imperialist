import jwtDecode from 'jwt-decode';

import { getLogin } from './auth-api';

const AUTH_REQUEST = 'AUTH_REQUEST';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAILURE = 'AUTH_FAILURE';
const AUTH_LOGOUT = 'AUTH_LOGOUT';

const authRequested = () => {
    return {
        type: AUTH_REQUEST
    };
};

const authLoaded = (payload) => {
    return {
        type: AUTH_SUCCESS,
        payload
    };
};

const authError = (error) => {
    return {
        type: AUTH_FAILURE,
        payload: error
    };
};

const authLogout = () => {
    return {
        type: AUTH_LOGOUT
    };
};

const login = (history) => (user) => (dispatch) => {
    dispatch(authRequested());

    getLogin(user)
        .then(({ data: { token } }) => {
            localStorage.setItem('token', token);

            const payload = {
                token,
                ...jwtDecode(token)
            };
            
            dispatch(authLoaded(payload));

            history.push('/');
        })
        .catch((error) => dispatch(authError(error)));
};

const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    
    dispatch(authLogout());
};

export {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    AUTH_LOGOUT,
    login,
    logout,
    authLoaded
};