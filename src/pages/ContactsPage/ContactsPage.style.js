import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--bgColorContainer);
  width: 400px;
  margin: 30px auto;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
`;

const MainTitle = styled.h1`
  font-size: 48px;
  color: var(--titleColor);
  text-align: center;
`;

const ContactTitle = styled.h2`
  color: var(--titleColor);
  font-size: 24px;
`;

export { Container, MainTitle, ContactTitle };
