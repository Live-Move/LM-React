import React from "react";
import MainPage from "../Main/MainPage";
import ListPage from "../List/ListPage";
import LoginMain from "../Login/LoginMain";
import LoginPage from "../Login/LoginPage";

const MainScreens = {
  Login: {
    path: "/user/login",
    element: <LoginMain />,
  },
  LoginTest: {
    path: "/user/login/test",
    element: <LoginPage />,
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
