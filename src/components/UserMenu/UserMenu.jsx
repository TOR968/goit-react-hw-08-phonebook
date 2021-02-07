import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import { name, loading } from '../../redux/auth/auth-selectors';
import { logoutUser } from '../../redux/auth/auth-operations';
import PreLoader from '../PreLoader';
import { Container, UserGreeting } from './UserMenu.style';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(name);
  const loadingAuth = useSelector(loading);

  const logout = useCallback(() => dispatch(logoutUser()), [dispatch]);

  return (
    <Container>
      <UserGreeting>Welcome {userName}!</UserGreeting>
      {loadingAuth ? (
        <PreLoader sizePreloader="116px" />
      ) : (
        <Button variant="outlined" color="action" onClick={logout}>
          <ExitToAppIcon />
        </Button>
      )}
    </Container>
  );
};

export default UserMenu;
