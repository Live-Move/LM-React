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
  flex-direction: column;
  background-color: ${(props) => props.bg_color};
  border-radius: 5px;
  opacity: 0.6;
  max-width: 650px;
  min-width: 450px;
  max-height: 940px;
  width: 40%;
  height: auto;
  color: white;
  margin: 20px;
  padding: 20px 40px 12px 40px;
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
  width: 100%;
  background-color: ${(props) => props.bg_color};
  border-color: ${(props) => props.border_color};
  color: ${(props) => props.font_color};
  transition-duration: 0.25s;

  /* 마우스 호버 이벤트 */
  &:hover {
    border-color: lightskyblue;
    background-color: lightskyblue;
    font-weight: bold;
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
  width: 100%;
  transition-duration: 0.3s;

  /* 마우스 호버 이벤트 */
  &:hover {
    font-weight: bold;
    opacity: 0.7;
  }
`;
