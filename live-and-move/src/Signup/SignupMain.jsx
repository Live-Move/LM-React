import React from "react";
import SignupPage from "./SignupPage";
import { MainContainerSignup } from "./CSS/SignupCss";
import { A } from "../Main/HeaderNavigationMenuCss";

function SignupMain(props) {
  return (
    <MainContainerSignup>
      <A href="/main">
        <img
          src="https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/logo_white.png?raw=true"
          alt="logo"
        />
      </A>
      <SignupPage />
    </MainContainerSignup>
  );
}

export default SignupMain;
