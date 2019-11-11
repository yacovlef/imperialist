import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import auth from './auth/auth-reducer';

const reducer = combineReducers({
    auth
});

export default createStore(reducer, applyMiddleware(thunkMiddleware));