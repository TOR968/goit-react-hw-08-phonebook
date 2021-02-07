import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const filter = state => state.contacts.filter;
const loading = state => state.contacts.loading;
const error = state => state.contacts.error;

const filteredContacts = createSelector(
  [getContacts, filter],
  (contacts, filter) => {
    const filterBy = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(filterBy));
  },
);

export { getContacts, filter, loading, error, filteredContacts };
