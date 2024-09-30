import React from "react";
import styled from "styled-components";
import LoginPage from "./LoginPage";

const MainContainer = styled.div`
  display: flex;
  font-family: "apple";
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://homeamaziz.com/wp-content/uploads/2024/06/Untitled-design.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

function LoginMain(props) {
  return (
    <MainContainer>
      <LoginPage />
    </MainContainer>
  );
}

export default LoginMain;
