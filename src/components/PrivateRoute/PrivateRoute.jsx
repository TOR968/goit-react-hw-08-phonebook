import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../../redux/auth/auth-selectors';
import routes from '../../routes';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticatedUser = useSelector(isAuthenticated);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticatedUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={routes.loginPage} />
        )
      }
    />
  );
};

export default PrivateRoute;
