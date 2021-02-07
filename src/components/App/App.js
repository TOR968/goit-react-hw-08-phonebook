import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AppBar from '../AppBar';
import PreLoader from '../PreLoader';
import routes from '../../routes';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import { getCurrentUser } from '../../redux/auth/auth-operations';
import { fetchUserContact } from '../../redux/phonebook/phonebook-operations';

const HomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "home" */),
);
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage' /* webpackChunkName: "ContactsPage" */),
);
const LoginPage = lazy(() =>
  import('../../pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage' /* webpackChunkName: "RegisterPage" */),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(fetchUserContact());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<PreLoader sizePreloader="200px" />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <PrivateRoute path={routes.contactsPage} component={ContactsPage} />
            <PublicRoute
              path={routes.loginPage}
              restricted
              component={LoginPage}
            />
            <PublicRoute
              path={routes.registerPage}
              restricted
              component={RegisterPage}
            />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </main>
    </>
  );
};

export default App;
