import React from "react";
import AppPages from "./AppPages";
import NavForRoute from "./NavForRoute";
import Footer from "../Main/Footer";

function AppSrceen(props) {
  return (
    <>
      <NavForRoute />
      <AppPages />
      <Footer />
    </>
  );
}

export default AppSrceen;
