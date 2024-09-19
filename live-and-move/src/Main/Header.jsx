import React from "react";
import { HeaderDiv, Container } from "./HeaderCss";
import HeaderNavigationMenu from "./HeaderNavigationMenu";
import HeaderSearchMenu from "./HeaderSearchMenu";
import HeaderUserMenu from "./HeaderUserMenu";
function Header(props) {
  return (
    <HeaderDiv>
      <Container>
        <HeaderNavigationMenu />
        <HeaderSearchMenu />
        <HeaderUserMenu />
      </Container>
    </HeaderDiv>
  );
}

export default Header;
