import { createAction } from '@reduxjs/toolkit';

const registrationUserRequest = createAction('auth/registrationUserRequest');
const registrationUserSuccess = createAction('auth/registrationUserSuccess');
const registrationUserError = createAction('auth/registrationUserError');

const authorizationUserRequest = createAction('auth/authorizationUserRequest');
const authorizationUserSuccess = createAction('auth/authorizationUserSuccess');
const authorizationUserError = createAction('auth/authorizationUserError');

const logoutUserRequest = createAction('auth/logoutUserRequest');
const logoutUserSuccess = createAction('auth/logoutUserSuccess');
const logoutUserError = createAction('auth/logoutUserError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const authActions = {
  registrationUserRequest,
  registrationUserSuccess,
  registrationUserError,
  authorizationUserRequest,
  authorizationUserSuccess,
  authorizationUserError,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};

export default authActions;
