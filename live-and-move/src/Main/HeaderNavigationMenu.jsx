import React from "react";
import { A, Container, Li, Ul } from "./HeaderNavigationMenuCss";

const MenuList = [
  { title: "홈", href: "/main" },
  { title: "가구", href: "/list" },
  { title: "소품", href: "/list" },
];

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
        {MenuList.map((munuItem, index) => {
          return (
            <Li key={index}>
              <A href={munuItem.href}>{munuItem.title}</A>
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
}

export default HeaderNavigationMenu;
