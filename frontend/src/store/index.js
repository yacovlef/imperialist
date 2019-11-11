import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({});

export default createStore(reducer, applyMiddleware(thunkMiddleware));