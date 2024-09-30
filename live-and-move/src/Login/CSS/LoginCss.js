import { ToggleButton } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import KakaoLogin from "react-kakao-login";
import styled from "styled-components";

// LoginPage.jsx
export const FieldMessage = styled.h6`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

// LoginPage.jsx
export const MainContainer = styled.div`
  display: flex;
  font-family: "apple";
  flex-direction: column;
  background-color: ${(props) => props.bg_color};
  border-radius: 5px;
  opacity: 0.6;
  max-width: 400px;
  min-width: 500px;
  color: white;
  margin: 20px;
  padding: 45px;
  gap: 4px;
`;

// LoginPage.jsx
export const ALink = styled.a`
  margin: 0px 10px;
  color: ${(props) => props.color};
  &:link {
    text-decoration: none;
  }
`;

// LoginPage.jsx
export const ButtonInLogin = styled(Button)`
  margin-bottom: 4px;
  border-radius: 0;
  border: none;
  font-size: 20px;
  width: 100%;
  background-color: #c1ab86;
  color: ${(props) => props.font_color};
  transition-duration: 0.25s;

  /* 마우스 호버 이벤트 */
  &:hover {
    background-color: #b37840;
    transition-duration: 0.25s;
  }
`;

// LoginPage.jsx
export const SpanCol = styled.span`
  margin-top: 8px;
  display: flex;
  flex-direction: columns;
  justify-content: center;
  color: ${(props) => props.font_color};
  font-size: ${(props) => props.font_size};
`;

// KakaoLogin
export const KakaoLoginButton = styled(KakaoLogin)`
  margin: 4px;
  transition-duration: 0.3s;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOACrRJyk-4693gXNbbpXfQ4OVXSWm3sl5g&s");
  background-repeat: no-repeat;
  background-size: cover;

  /* 마우스 호버 이벤트 */
  &:hover {
    font-weight: bold;
    opacity: 0.7;
  }
`;

// AccountPage ToggleButton
export const AccountStateButton = styled(Button)`
  margin: 0px 0px 8px 0px;
  border-radius: 0;
  border: none;
  color: darkgray;
  font-size: 20px;
  width: 100%;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.font_color};

  &:hover {
    background-color: #b37840;
    transition-duration: 0.2s;
  }

  &:active {
    background-color: #64502e !important;
    transition-duration: 0.2s;
  }
`;
