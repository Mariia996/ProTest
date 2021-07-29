import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../../../client/Navbar/components';
import LoaderSpinner from '../../../shared/components/Loader';
import Footer from '../../../client/Footer';

import { routes } from './routes';

import PublicPage from '../PublicRoute';
// import PrivatePage from '../PrivateRoute';
const AuthPage = lazy(() => import('../../../pages/AuthPage') /* webpackChunkName: "AuthPage" */);
const ContactsPage = lazy(() => import('../../../pages/ContactsPage') /* webpackChunkName: "ContactsPage" */);
const MainPage = lazy(() => import('../../../pages/MainPage') /* webpackChunkName: "MainPage" */);
const TestPage = lazy(() => import('../../../pages/TestPage') /* webpackChunkName: "TestPage" */);
const ResultsPage = lazy(() =>import('../../../pages/ResultsPage') /* webpackChunkName: "ResultsPage" */);
const UsefulInfoPage = lazy(() =>import('../../../pages/UsefulInfoPage') /* webpackChunkName: "UsefulInfoPage" */);

function App() {
  const { auth, contacts, main, test, results, materials } = routes;
  return (
    <Router>
      <Suspense fallback={<LoaderSpinner />}>
        <Navbar />
        <Switch>
          <PublicPage exact path={auth} restricted component={AuthPage} redirectTo={main}
          />
          <Route exact path={contacts} component={ContactsPage} />
          {/* <PrivatePage exact path={main} component={MainPage} redirectTo={auth} /> */}
          <Route exact path={main} component={MainPage} />
          {/* <PrivatePage exact path={test} component={TestPage} redirectTo={auth} /> */}
          <Route exact path={test} component={TestPage} />
          {/* <PrivatePage exact path={results} component={ResultsPage} redirectTo={auth} /> */}
          <Route exact path={results} component={ResultsPage} />
          {/* <PrivatePage exact path={materials} component={UsefulInfoPage} redirectTo={auth} /> */}
          <Route exact path={materials} component={UsefulInfoPage} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
