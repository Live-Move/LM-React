import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import styled from "styled-components";
import AppPages from "./AppPages";
import NavForRoute from "./NavForRoute";

function AppSrceen(props) {
  const windowSize = useWindowSize();
  return (
    <>
      <NavForRoute />
      <AppPages />
    </>
  );
}

export default AppSrceen;
