import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addUserContact } from '../../redux/phonebook/phonebook-operations';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import { Form, LabelForm, InputForm, Button } from './ContactFormStyles';

const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const checkingForExistenceOfSuchName = verifiableName => {
    const handleName = verifiableName.toLowerCase();
    return items.find(({ name }) => name.toLowerCase() === handleName);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const repeatName = checkingForExistenceOfSuchName(name);

    if (repeatName) {
      alert(`${name} is already in contact`);
    } else {
      const newContact = { name, number };
      dispatch(addUserContact(newContact));
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelForm>
        Name
        <InputForm
          onChange={handleChange}
          type="text"
          name={'name'}
          placeholder="Enter name"
          value={name}
          required
        />
      </LabelForm>
      <LabelForm>
        Number
        <InputForm
          onChange={handleChange}
          type="tel"
          name={'number'}
          placeholder="Enter number"
          value={number}
          required
        />
      </LabelForm>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
