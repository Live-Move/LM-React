import React from "react";
import { A, Container, Li, Ul } from "./HeaderNavigationMenuCss";

function HeaderNavigationMenu(props) {
  return (
    <Container>
      <Ul>
        <Li>
          <A href="/main">
            <img
              src="https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/logo_white.png?raw=true"
              alt="logo"
            />
          </A>
        </Li>
      </Ul>
    </Container>
  );
}

export default HeaderNavigationMenu;
