import { NavLink } from 'react-router-dom';
// import styled from '@emotion/styled';

// const StyledLink = styled(NavLink)`
//   color: black;
//   margin-right: 15px;
//   text-decoration: none;

//   &.active {
//     color: #ff0000;
//   }
// `;

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}

export default Navigation;
