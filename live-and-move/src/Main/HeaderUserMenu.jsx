import { A, Container, Li, Ul } from "./HeaderUserMenuCss";
import {
  MdOutlineLogin,
  MdOutlineLogout,
  MdOutlineStorefront,
} from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";
import { isSessionExists } from "../Login/Account/AccountChk";
function HeaderUserMenu(props) {
  const handleLogout = (e) => {
    alert("로그아웃 클릭");
    sessionStorage.clear();
    // setLoginState(false);
  };

  const LogoutStatueMenu = [
    {
      icon: <MdOutlineLogin size="30" />,
      href: "/user/login",
      content: "로그인",
    },
  ];

  const LoginStatusMenu = [
    {
      icon: <MdOutlineLogout size="30" />,
      href: "/main",
      content: "로그아웃",
      click: handleLogout,
    },
    {
      icon: <MdOutlineStorefront size="30" />,
      href: "/mypage",
      content: "마이스토어",
    },
    {
      icon: <BsCart4 size="30" />,
      href: "/cart",
      content: "장바구니",
    },
  ];

  const UserMenuList = [
    {
      icon: <FaHeadset size="30" />,
      href: "/",
      content: "고객센터",
    },
  ];

  return (
    <Container>
      <Ul>
        {(isSessionExists() !== null ? LoginStatusMenu : LogoutStatueMenu).map(
          (logo, index) => {
            return (
              <Li key={index} onClick={logo.click ? logo.click : null}>
                <A href={logo.href}>
                  {logo.icon}
                  <span>{logo.content}</span>
                </A>
              </Li>
            );
          }
        )}
        {UserMenuList.map((logo, index) => {
          return (
            <Li key={index} onClick={logo.click ? logo.click : null}>
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
