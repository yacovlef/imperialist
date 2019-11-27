import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import auth from '../components/Auth/auth-reducer';
import userList from '../components/User/UserList/user-list-reducer';
import userForm from '../components/User/UserForm/user-form-reducer';
import userDelete from '../components/User/UserDelete/user-delete-reducer';
import orderList from '../components/Order/OrderList/order-list-reducer';
import orderForm from '../components/Order/OrderForm/order-form-reducer';
import orderDelete from '../components/Order/OrderDelete/order-delete-reducer';
import orderFilter from '../components/Order/OrderFilter/order-filter-reducer';
import nomenclatureList from '../components/Nomenclature/NomenclatureList/nomenclature-list-reducer';
import nomenclatureForm from '../components/Nomenclature/NomenclatureForm/nomenclature-form-reducer';
import nomenclatureDelete from '../components/Nomenclature/NomenclatureDelete/nomenclature-delete-reducer';
import projectList from '../components/Project/ProjectList/project-list-reducer';
import projectForm from '../components/Project/ProjectForm/project-form-reducer';
import projectDelete from '../components/Project/ProjectDelete/project-delete-reducer';
import projectFilter from '../components/Project/ProjectFilter/project-filter-reducer';
import projectMaterialDelete from '../components/Project/ProjectMaterialDelete/project-material-delete-reducer';

const reducer = combineReducers({
    auth,
    userList,
    userForm,
    userDelete,
    orderList,
    orderForm,
    orderDelete,
    orderFilter,
    nomenclatureList,
    nomenclatureForm,
    nomenclatureDelete,
    projectList,
    projectForm,
    projectDelete,
    projectFilter,
    projectMaterialDelete
});

export default createStore(reducer, applyMiddleware(thunkMiddleware));
