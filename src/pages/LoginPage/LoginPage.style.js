import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 10px;
  background-color: var(--bgColorContainer);
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 380px;
    padding: 30px 30px;
  }
`;

const Form = styled.form`
  display: block;
  margin-bottom: 10px;
  text-align: center;
`;

const LabelForm = styled.label`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: var(--primaryTextColor);
`;

const InputForm = styled.input`
  display: block;
  margin: 20px auto;
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
  padding: 12px 40px;
  margin: 10px 5px;
  border-radius: 10px;
  background-color: var(--secondColor);
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: white;

  &:hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }
`;

const Error = styled.div`
  color: red;
  font-weight: bold;
  line-height: 30px;
  padding: 20px 16px 0;
  font-size: 22px;
  text-align: center;
  margin-bottom: 16px;
`;

export { Container, Form, LabelForm, InputForm, Button, Error };
