import React from "react";
import MainPage from "../Main/MainPage";
import ListPage from "../List/ListPage";
import LoginMain from "../Login/LoginMain";
import SignupMain from "../Signup/SignupMain";
import SignupPage from "../Signup/SignupPage";
import ListDetailpage from "../ListDetail/ListDetailpage";
import Cart from "../Cart/Cart";
import KakaoLoginPage from "../Login/Social/Kakao/KakaoLoginPage";
import AccountMain from "../Login/Account/AccountMain";
import AccountPage from "../Login/Account/AccountPage";
import MyPageMain from "../MyPage/MyPageMain";
import CompletionPaymentPage from "../Payment/CompletionPaymentPage";
import PaymentPage from "../Payment/PaymentPage";

const MainScreens = {
  SocialLogin: {
    path: "/user/social/kakao",
    element: <KakaoLoginPage />,
  },
  Login: {
    path: "/user/login",
    element: <LoginMain />,
  },
  Account: {
    path: "/account",
    element: <AccountMain />,
  },
  AccountPage: {
    path: "/account/page",
    element: <AccountPage />,
  },
  MyPage: {
    path: "/mypage/:user_id",
    element: <MyPageMain />,
  },
  Signup: {
    path: "/user/signup",
    element: <SignupMain />,
  },
  SignupTest: {
    path: "/user/signup/test",
    element: <SignupPage />,
  },
  Main: {
    path: "/main",
    element: <MainPage />,
  },
  List: {
    path: "/list",
    element: <ListPage />,
  },
  ListDetail: {
    path: "/listdetail/:product_id",
    element: <ListDetailpage />,
  },
  Cart: {
    path: "/cart",
    element: <Cart />,
  },
  PaymentPage: {
    path: "/PaymentPage",
    element: <PaymentPage />,
  },
  CompletionPaymentPage: {
    path: "/CompletionPaymentPage",
    element: <CompletionPaymentPage />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
