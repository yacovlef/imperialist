import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';

import ErrorBoundry from './components/@common/ErrorBoundry';
import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router>
                <App />
            </Router>
        </ErrorBoundry>
    </Provider>, document.getElementById('root'));