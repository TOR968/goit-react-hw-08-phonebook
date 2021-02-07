import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../../redux/auth/auth-selectors';
import routes from '../../routes';

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticatedUser = useSelector(isAuthenticated);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticatedUser && routeProps.restricted ? (
          <Redirect to={routes.contactsPage} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
