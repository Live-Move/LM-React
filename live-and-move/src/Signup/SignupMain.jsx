import React from "react";
import styled from "styled-components";
import SignupPage from "./SignupPage";
import LM_logo from "../Logo/logo.svg";

const MainContainer = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function SignupMain(props) {
  return (
    <MainContainer>
      <img src={LM_logo} alt="" />
      <SignupPage />
    </MainContainer>
  );
}

export default SignupMain;
