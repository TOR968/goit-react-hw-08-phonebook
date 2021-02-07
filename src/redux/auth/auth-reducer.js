import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-action';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registrationUserSuccess]: (_, { payload }) => payload.user,
  [authActions.authorizationUserSuccess]: (_, { payload }) => payload.user,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
  [authActions.logoutUserSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.registrationUserSuccess]: (_, { payload }) => payload.token,
  [authActions.authorizationUserSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutUserSuccess]: () => null,
});

const isAuthenticated = createReducer(false, {
  [authActions.registrationUserSuccess]: () => true,
  [authActions.authorizationUserSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,

  [authActions.registrationUserError]: () => false,
  [authActions.authorizationUserError]: () => false,
  [authActions.logoutUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,
});

const loading = createReducer(false, {
  [authActions.registrationUserRequest]: () => true,
  [authActions.registrationUserSuccess]: () => false,
  [authActions.registrationUserError]: () => false,

  [authActions.authorizationUserRequest]: () => true,
  [authActions.authorizationUserSuccess]: () => false,
  [authActions.authorizationUserError]: () => false,

  [authActions.logoutUserRequest]: () => true,
  [authActions.logoutUserSuccess]: () => false,
  [authActions.logoutUserError]: () => false,

  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,
});

const error = createReducer(false, {
  [authActions.registrationUserRequest]: () => '',
  [authActions.registrationUserSuccess]: () => '',
  [authActions.registrationUserError]: (_, { payload }) => payload,

  [authActions.authorizationUserRequest]: () => '',
  [authActions.authorizationUserSuccess]: () => '',
  [authActions.authorizationUserError]: (_, { payload }) => payload,

  [authActions.logoutUserRequest]: () => '',
  [authActions.logoutUserSuccess]: () => '',
  [authActions.logoutUserError]: (_, { payload }) => payload,

  [authActions.getCurrentUserRequest]: () => '',
  [authActions.getCurrentUserSuccess]: () => '',
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
});

const authUsersReducer = combineReducers({
  user,
  token,
  isAuthenticated,
  loading,
  error,
});

export default authUsersReducer;
