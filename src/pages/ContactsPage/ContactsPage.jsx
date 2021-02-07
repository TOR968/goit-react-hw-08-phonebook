import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import { Container, MainTitle, ContactTitle } from './ContactsPage.style';

const ContactsPage = () => {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
