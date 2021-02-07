import axios from 'axios';
import {
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

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const fetchUserContact = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error.message)));
};

const addUserContact = ({ name, number }) => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

const removeUserContact = id => dispatch => {
  dispatch(removeContactRequest());

  axios
    .delete(`contacts/${id}`)
    .then(() => dispatch(removeContactSuccess(id)))
    .catch(error => dispatch(removeContactError(error.message)));
};

export { fetchUserContact, addUserContact, removeUserContact };
