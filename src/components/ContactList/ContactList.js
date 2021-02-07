import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  fetchUserContact,
  removeUserContact,
} from '../../redux/phonebook/phonebook-operations';
import {
  loading,
  error,
  filteredContacts,
} from '../../redux/phonebook/phonebook-selectors';
import ContactListItem from './ContactListItem';
import PreLoader from '../PreLoader';

import { List, Error } from './ContactListStyles';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(filteredContacts);
  const loadingContacts = useSelector(loading);
  const errorFetch = useSelector(error);

  useEffect(() => {
    dispatch(fetchUserContact());
  }, []);

  return (
    <>
      {loadingContacts && <PreLoader />}
      {errorFetch && (
        <Error>Something wrong... {errorFetch}! Try again later!</Error>
      )}
      {!loadingContacts && !errorFetch && items && items.length > 0 ? (
        <List>
          {items.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              deleteContact={() => dispatch(removeUserContact(id))}
            />
          ))}
        </List>
      ) : null}
    </>
  );
};

export default ContactList;
