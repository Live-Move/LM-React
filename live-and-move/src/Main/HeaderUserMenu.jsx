import React from "react";
import { A, Container, Li, Ul } from "./HeaderUserMenuCss";

function HeaderUserMenu(props) {
  const UserMenuList = [
    {
      src: "/",
      href: "/user/login",
      content: "로그인",
    },
    {
      src: "/",
      href: "/",
      content: "마이스토어",
    },
    {
      src: "/",
      href: "/cart",
      content: "장바구니",
    },
    {
      src: "/",
      href: "/",
      content: "고객센터",
    },
  ];

  return (
    <Container>
      <Ul>
        {UserMenuList.map((logo, index) => {
          return (
            <Li key={index}>
              <A href={logo.href}>
                <img src={logo.src} alt="logo" />
                <span>{logo.content}</span>
              </A>
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
}

export default HeaderUserMenu;
