import axios from 'axios';
import authActions from './auth-action';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const userToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registrationUser = ({ name, email, password }) => dispatch => {
  dispatch(authActions.registrationUserRequest());

  axios
    .post('/users/signup', { name, email, password })
    .then(({ data: { user, token } }) => {
      userToken.set(token);
      dispatch(authActions.registrationUserSuccess({ user, token }));
    })
    .catch(error => dispatch(authActions.registrationUserError(error.message)));
};

const authorizationUser = ({ email, password }) => dispatch => {
  dispatch(authActions.authorizationUserRequest());

  axios
    .post('/users/login', { email, password })
    .then(({ data: { user, token } }) => {
      userToken.set(token);
      dispatch(authActions.authorizationUserSuccess({ user, token }));
    })
    .catch(error =>
      dispatch(authActions.authorizationUserError(error.message)),
    );
};

const logoutUser = () => dispatch => {
  dispatch(authActions.logoutUserRequest());

  axios
    .post('/users/logout')
    .then(() => {
      userToken.unset();
      dispatch(authActions.logoutUserSuccess());
    })
    .catch(error => dispatch(authActions.logoutUserError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) return;
  userToken.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
};

export { registrationUser, authorizationUser, logoutUser, getCurrentUser };
