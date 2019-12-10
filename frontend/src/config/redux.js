import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import auth from '../components/Auth/auth-reducer';
import userList from '../components/User/UserList/user-list-reducer';
import userForm from '../components/User/UserForm/user-form-reducer';
import userDelete from '../components/User/UserDelete/user-delete-reducer';
import projectList from '../components/Project/ProjectList/project-list-reducer';
import projectForm from '../components/Project/ProjectForm/project-form-reducer';
import projectDelete from '../components/Project/ProjectDelete/project-delete-reducer';
import projectFilter from '../components/Project/ProjectFilter/project-filter-reducer';
import nomenclatureList from '../components/Nomenclature/NomenclatureList/nomenclature-list-reducer';
import nomenclatureForm from '../components/Nomenclature/NomenclatureForm/nomenclature-form-reducer';
import nomenclatureDelete from '../components/Nomenclature/NomenclatureDelete/nomenclature-delete-reducer';
import productList from '../components/Product/ProductList/product-list-reducer';
import productForm from '../components/Product/ProductForm/product-form-reducer';
import productDelete from '../components/Product/ProductDelete/product-delete-reducer';
import productFilter from '../components/Product/ProductFilter/product-filter-reducer';
import productMaterialAdd from '../components/Product/ProductMaterialAdd/product-material-add-reducer';
import productMaterialDelete from '../components/Product/ProductMaterialDelete/product-material-delete-reducer';
import productPerformerAdd from '../components/Product/ProductPerformerAdd/product-performer-add-reducer';
import productPerformerDelete from '../components/Product/ProductPerformerDelete/product-performer-delete-reducer';
import wagesList from '../components/Wages/WagesList/wages-list-reducer';
import wagesForm from '../components/Wages/WagesForm/wages-form-reducer';
import wagesDelete from '../components/Wages/WagesDelete/wages-delete-reducer';
import wagesFilter from '../components/Wages/WagesFilter/wages-filter-reducer';

const reducer = combineReducers({
    auth,
    userList,
    userForm,
    userDelete,
    projectList,
    projectForm,
    projectDelete,
    projectFilter,
    nomenclatureList,
    nomenclatureForm,
    nomenclatureDelete,
    productList,
    productForm,
    productDelete,
    productFilter,
    productMaterialAdd,
    productMaterialDelete,
    productPerformerAdd,
    productPerformerDelete,
    wagesList,
    wagesForm,
    wagesDelete,
    wagesFilter
});

export default createStore(reducer, applyMiddleware(thunkMiddleware));
