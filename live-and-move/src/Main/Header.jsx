import React from "react";
import { HeaderDiv, Container } from "./HeaderCss";
import HeaderNavigationMenu from "./HeaderNavigationMenu";
import HeaderSearchMenu from "./HeaderSearchMenu";
import HeaderUserMenu from "./HeaderUserMenu";
function Header({ loginState, setLoginState }) {
  return (
    <HeaderDiv>
      <Container>
        <HeaderNavigationMenu />
        <HeaderSearchMenu />
        <HeaderUserMenu loginState={loginState} setLoginState={setLoginState} />
      </Container>
    </HeaderDiv>
  );
}

export default Header;
