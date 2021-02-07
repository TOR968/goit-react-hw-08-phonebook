import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import phonebookReducer from './phonebook/phonebook-reducer';
import authUsersReducer from './auth/auth-reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  contacts: phonebookReducer,
  auth: persistReducer(authPersistConfig, authUsersReducer),
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);

export default store;
