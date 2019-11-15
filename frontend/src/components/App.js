import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './@common/Header';
import Main from './@common/Main';
import Footer from './@common/Footer';
import Auth from './Auth';
import User from './User';
import PrivateRoute from '../components/@common/PrivateRoute'
import Info from './@common/Info';

import './app.css';

function App() {
    return (
        <>
            <Header />
            <Main>
                <Switch>
                    <Route
                        path="/login"
                        component={Auth}
                        exact
                    />
                    <PrivateRoute
                        path="/users"
                        component={User}
                        exact
                    />
                    <PrivateRoute
                        path="/"
                        render={() => <Info
                            message='Заказы'
                        />}
                        exact
                    />
                    <PrivateRoute
                        path="/products"
                        render={() => <Info
                            message='Изделия'
                        />}
                        exact
                    />
                    <PrivateRoute
                        path="/nomenclature"
                        render={() => <Info
                            message='Номенклатура'
                        />}
                        exact
                    />
                    <Route
                        render={() => <Info
                            type='not-found'
                        />}
                    />
                </Switch>
            </Main>
            <Footer />
        </>
    );
}

export default App;
