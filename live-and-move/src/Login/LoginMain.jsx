import React from "react";
import styled from "styled-components";
import LoginPage from "./LoginPage";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
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
