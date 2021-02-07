import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    align-items: stretch;
  }
`;

const NavMenu = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

export { Nav, NavMenu };
