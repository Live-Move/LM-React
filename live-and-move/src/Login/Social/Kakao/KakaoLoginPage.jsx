import React from "react";
import { JS_SDK_KEY } from "./LM_key";
import { KakaoLoginButton } from "../../CSS/LoginCss";

function KakaoLoginPage(props) {
  const kakaoOnSuccess = async (data) => {
    console.log(`[ user data ]`);
    console.log(data.profile);
    const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달
    console.log(`[ idToken ] >> ${idToken}`);
  };
  const kakaoOnFailure = (error) => {
    console.log(error);
  };
  return (
    <>
      <KakaoLoginButton
        style={{
          backgroundColor: null,
          width: "50px",
          height: "50px",
          borderRadius: 100,
          textIndent: "-99999px",
        }}
        token={JS_SDK_KEY}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </>
  );
}

export default KakaoLoginPage;
