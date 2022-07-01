import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
  height: 5rem;
  width: 100%;
  background-color: #044599;
  padding: 0 10%;
`;

export const NavBar = styled.nav`
  height: 100%;
`;

export const NavList = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  list-style: none;
`;

export const NavItem = styled.li`
  margin: 0 1rem;
  width: 5rem;
`;

export const NavLinkS = styled(NavLink)`
  display: inline-block;
  color: white;
  text-decoration: none;
  height: 100%;

  &:hover,
  &:active,
  &:focus,
  &.active {
    outline: none;
    color: #95bcf0;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid #95bcf0;
  }
`;
