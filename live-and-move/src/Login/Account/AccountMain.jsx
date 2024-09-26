import React from "react";
import { MainContainerSignup } from "../../Signup/CSS/SignupCss";
import AccountPage from "./AccountPage";

function AccountMain(props) {
  return (
    <>
      <MainContainerSignup>
        <h1>AccountMain</h1>
        <AccountPage />
      </MainContainerSignup>
    </>
  );
}

export default AccountMain;
