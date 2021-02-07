import styled from 'styled-components';

const Form = styled.form`
  display: block;
  margin-bottom: 10px;
`;

const InputForm = styled.input`
  display: block;
  margin: 10px auto;
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 10px;

  &::placeholder {
    padding-left: 10px;
    font-size: 18px;
  }
`;

const Button = styled.button`
  outline: none;
  padding: 12px 20px;
  margin: 10px 5px;
  border-radius: 10px;
  background-color: #e9967a;
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: white;
`;

const LabelForm = styled.label`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
`;

export { Form, InputForm, Button, LabelForm };
