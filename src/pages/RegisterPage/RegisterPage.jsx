import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { registrationUser } from '../../redux/auth/auth-operations';
import { loading, error } from '../../redux/auth/auth-selectors';
import PreLoader from '../../components/PreLoader';
import {
  Container,
  Form,
  LabelForm,
  InputForm,
  Button,
  Error,
} from '../LoginPage/LoginPage.style';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const loadingAuth = useSelector(loading);
  const errorAuth = useSelector(error);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { email, name, password };
    dispatch(registrationUser(newContact));
    reset();
  };

  const reset = () => {
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <Container>
      {errorAuth && <Error>Invalid email or password! Try again!</Error>}
      <Form onSubmit={handleSubmit}>
        <LabelForm>
          E-mail
          <InputForm
            onChange={handleChange}
            type="email"
            name={'email'}
            placeholder="Enter e-mail"
            value={email}
            required
          />
        </LabelForm>
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
          Password
          <InputForm
            onChange={handleChange}
            type="current-password"
            name={'password'}
            placeholder="Enter password"
            value={password}
            required
          />
        </LabelForm>

        {loadingAuth ? (
          <PreLoader sizePreloader="60px" />
        ) : (
          <Button type="submit">Sing Up</Button>
        )}
      </Form>
    </Container>
  );
};

export default RegisterPage;
