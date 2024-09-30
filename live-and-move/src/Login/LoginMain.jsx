import React from "react";
import styled from "styled-components";
import LoginPage from "./LoginPage";

const MainContainer = styled.div`
  font-family: "apple";
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(var(--vh, 3vh) * 15);
  width: 100vw;
  height: 70vh;
  background-color: #333333;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://homeamaziz.com/wp-content/uploads/2024/06/Untitled-design.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: auto;
  /* object-fit: contain; */
`;

function LoginMain(props) {
  return (
    <MainContainer>
      <LoginPage />
    </MainContainer>
  );
}

export default LoginMain;
