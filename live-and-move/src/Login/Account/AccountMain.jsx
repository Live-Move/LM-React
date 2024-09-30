import React from "react";
import { MainContainerSignup } from "../../Signup/CSS/SignupCss";
import AccountPage from "./AccountPage";

function AccountMain(props) {
  return (
    <>
      <MainContainerSignup>
        <h2>아이디, 패스워드를 찾고 계시나요?</h2>
        <AccountPage />
      </MainContainerSignup>
    </>
  );
}

export default AccountMain;
