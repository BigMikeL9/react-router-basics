import React from "react";

import {
  HeaderStyled,
  NavBar,
  NavList,
  NavItem,
  NavLinkS,
} from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderStyled>
      <NavBar>
        <NavList>
          <NavItem>
            <NavLinkS activeClassName="active" to="/welcome">
              Welcome
            </NavLinkS>
          </NavItem>
          <NavItem>
            <NavLinkS activeClassName="active" to="/products">
              Products
            </NavLinkS>
          </NavItem>
        </NavList>
      </NavBar>
    </HeaderStyled>
  );
};

export default Header;
