import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import tasksActions from './phonebook-action';
import authActions from '../auth/auth-action';
import {
  filterContact,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './phonebook-action';

const fetchContact = (_, { payload }) => {
  return [...payload];
};

const addContact = (state, { payload }) => {
  return [...state, payload];
};

const removeContact = (state, { payload }) => {
  return state.filter(({ id }) => id !== payload);
};

const items = createReducer([], {
  [fetchContactSuccess]: fetchContact,
  [addContactSuccess]: addContact,
  [removeContactSuccess]: removeContact,
  [authActions.logoutUserSuccess]: () => [],
});

const filter = createReducer('', {
  [filterContact.type]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

const error = createReducer(false, {
  [fetchContactRequest]: () => '',
  [fetchContactSuccess]: () => '',
  [fetchContactError]: (_, { payload }) => payload,

  [addContactRequest]: () => '',
  [addContactSuccess]: () => '',
  [addContactError]: (_, { payload }) => payload,

  [removeContactRequest]: () => '',
  [removeContactSuccess]: () => '',
  [removeContactError]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

export default phonebookReducer;
