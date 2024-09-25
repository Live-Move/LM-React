import React from "react";
import SignupPage from "./SignupPage";
import LM_logo from "../Logo/logo.svg";
import { MainContainerSignup } from "./CSS/SignupCss";

function SignupMain(props) {
  return (
    <MainContainerSignup>
      <img src={LM_logo} alt="" />
      <SignupPage />
    </MainContainerSignup>
  );
}

export default SignupMain;
