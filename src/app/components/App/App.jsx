import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../../../client/Navbar'

import PublicPage from '../PublicRoute'
const AuthPage = lazy(() => import('../../../pages/AuthPage') /* webpackChunkName: "AuthPage" */);

import { routes } from './routes';

function App() {
    const { auth, contacts, main, test, results, materials } = routes;
    return (<Router>
        <Suspense />
        <Navbar />
        <Switch>
            <PublicPage exact path={auth} restricted component={} />
        </Switch>
    </Router>)
}

export default App;