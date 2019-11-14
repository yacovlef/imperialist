import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import auth from '../components/Auth/auth-reducer';
import userList from '../components/User/UserList/user-list-reducer';
import userForm from '../components/User/UserForm/user-form-reducer';
import userDelete from '../components/User/UserDelete/user-delete-reducer';

const reducer = combineReducers({
    auth,
    userList,
    userForm,
    userDelete
});

export default createStore(reducer, applyMiddleware(thunkMiddleware));
