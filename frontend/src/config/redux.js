import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import auth from '../components/Auth/auth-reducer';
import userList from '../components/User/UserList/user-list-reducer';
import userForm from '../components/User/UserForm/user-form-reducer';
import userDelete from '../components/User/UserDelete/user-delete-reducer';
import orderList from '../components/Order/OrderList/order-list-reducer';
import orderForm from '../components/Order/OrderForm/order-form-reducer';
import orderDelete from '../components/Order/OrderDelete/order-delete-reducer';

const reducer = combineReducers({
    auth,
    userList,
    userForm,
    userDelete,
    orderList,
    orderForm,
    orderDelete
});

export default createStore(reducer, applyMiddleware(thunkMiddleware));
