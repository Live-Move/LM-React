import { A, Container, Li, Ul } from "./HeaderUserMenuCss";
import {
  MdOutlineLogin,
  MdOutlineLogout,
  MdOutlineStorefront,
} from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";
import { isSessionExists } from "../Login/Account/AccountChk";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function HeaderUserMenu(props) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "로그아웃 하시겠습니까?",
      text: "저희 서비스를 방문해주셔서 감사합니다!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#edd6b9",
      cancelButtonColor: "#c1ab86",
      confirmButtonText: "로그아웃!",
      cancelButtonText: "아니요, 아직입니다!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "로그아웃!",
          text: "이용해주셔서 감사합니다",
          icon: "success",
        });
        sessionStorage.clear();
        navigate("/");
      }
    });
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
      href: "/",
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
