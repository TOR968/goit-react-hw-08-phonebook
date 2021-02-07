import styled from 'styled-components';

const ListItem = styled.li`
  padding-left: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Text = styled.p`
  margin: 0;
`;

const Button = styled.button`
  margin-left: auto;
  outline: none;
  padding: 2px 5px;
  border-radius: 10px;
  background-color: #fa8072;
  background-position: 100% 0;
  background-size: 200% 200%;
  font-size: 16px;
  color: white;
`;

export { ListItem, Button, Text };
