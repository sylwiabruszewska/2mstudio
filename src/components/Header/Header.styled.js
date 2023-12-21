import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../styles/colors.js';

export const StyledLink = styled(NavLink)`
  color: ${colors.dark};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-family: 'Lexend', sans-serif;

  position: relative;

  &.active {
    color: ${colors.hover};
    font-weight: normal;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 3px;
      background: ${colors.primary};
      position: absolute;
      bottom: -10px;
      left: 0;
    }
  }

  &:hover {
    color: ${colors.hover};
    font-weight: normal;
  }

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    background: ${colors.primary};
    bottom: -10px;
    left: 0;
    transition: width 0.7s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }
`;
