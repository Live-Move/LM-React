import React, { useState } from "react";
import AppPages from "./AppPages";
import Footer from "../Main/Footer";
import Header from "../Main/Header";

function AppSrceen(props) {
  const [loginState, setLoginState] = useState(false);

  return (
    <>
      <Header loginState={loginState} setLoginState={setLoginState} />
      <AppPages />
      <Footer />
    </>
  );
}

export default AppSrceen;
