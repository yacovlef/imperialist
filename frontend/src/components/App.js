import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './@common/Header';
import Main from './@common/Main';
import Footer from './@common/Footer';
import PrivateRoute from './@common/PrivateRoute'
import Info from './@common/Info';

import Auth from './Auth';
import User from './User';
import Order from './Order';
import Nomenclature from './Nomenclature';

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
                        component={Order}
                        exact
                    />
                    <PrivateRoute
                        path="/projects"
                        render={() => <Info
                            message='Проекты'
                        />}
                        exact
                    />
                    <PrivateRoute
                        path="/nomenclature"
                        component={Nomenclature}
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
