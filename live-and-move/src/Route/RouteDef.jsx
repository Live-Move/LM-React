import React from "react";
import MainPage from "../Main/MainPage";
import ListPage from "../List/ListPage";
import LoginMain from "../Login/LoginMain";

const MainScreens = {
  Login: {
    path: "/user/login",
    element: <LoginMain />,
  },
  Main: {
    path: "/main",
    element: <MainPage />,
  },
  List: {
    path: "/list",
    element: <ListPage />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
