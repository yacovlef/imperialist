import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './@common/Header';
import Main from './@common/Main';
import Footer from './@common/Footer';
import Info from './@common/Info';
import Auth from './Auth';
import User from './User';

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
                    />
                    <Route
                        path="/users"
                        component={User}
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
