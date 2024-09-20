import React from "react";
import { A, Container, Li, Ul } from "./HeaderUserMenuCss";
import { MdOutlineLogin, MdOutlineStorefront } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";
function HeaderUserMenu(props) {
  const UserMenuList = [
    {
      icon: <MdOutlineLogin size="30" />,
      href: "/user/login",
      content: "로그인",
    },
    {
      icon: <MdOutlineStorefront size="30" />,
      href: "/",
      content: "마이스토어",
    },
    {
      icon: <BsCart4 size="30" />,
      href: "/cart",
      content: "장바구니",
    },
    {
      icon: <FaHeadset size="30" />,
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
                {logo.icon}
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
