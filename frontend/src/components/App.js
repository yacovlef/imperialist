import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './@common/Container';
import Header from './@common/Header';
import Main from './@common/Main';
import Footer from './@common/Footer';
import Info from './@common/Info';
import Auth from './Auth';

function App() {
    return (
        <>
            <Header />
            <Container>
                <Main>
                    <Switch>
                        <Route
                            path="/login"
                            component={Auth}
                        />
                        <Route
                            render={() => <Info
                                type='not-found'
                            />}
                        />
                    </Switch>
                </Main>
                <Footer />
            </Container>
        </>
    );
}

export default App;