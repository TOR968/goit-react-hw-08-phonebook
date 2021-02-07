import styled from 'styled-components';

const FilterInput = styled.input`
  display: block;
  margin: 10px auto;
  padding: 5px;
  font-size: 18px;
  border-radius: 10px;
  outline: none;

  &::placeholder {
    padding-left: 10px;
    font-size: 16px;
  }
`;

const FilterLabel = styled.label`
  display: block;
  text-align: center;
  margin: 0 auto;
  color: #fa8072;
  font-size: 22px;
  font-weight: bold;
`;

export { FilterInput, FilterLabel };
