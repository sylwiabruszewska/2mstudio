import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 5px 20px;
  cursor: pointer;

  justify-content: center;
  align-items: center;

  &.active {
    font-weight: 600;
  }

  &:hover {
    font-weight: 600;
  }
`;
