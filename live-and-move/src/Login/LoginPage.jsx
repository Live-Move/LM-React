import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// CSS from LoginCSS
import { ALink, MainContainer, ButtonInLogin, SpanCol } from "./CSS/LoginCss";

// bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import KakaoLoginPage from "./Social/Kakao/KakaoLoginPage";
import { isSessionExists } from "./Account/AccountChk";

const isValidMessage = (message) => {
  return (
    <Form.Control.Feedback type="invalid">{message}</Form.Control.Feedback>
  );
};

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 로그인 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/main");

    let data = {
      loginId: email,
      password: password,
    };
    fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        alert(data.code === "ok" ? "로그인 성공" : "로그인 실패");
        console.log(data.code); // ok , fail
        if (data.code === "ok") {
          sessionStorage.setItem("userData", JSON.stringify(data.data));
          console.log(`[ session Storage ]`);
          console.log(isSessionExists());
          navigate("/");
        }
      });
  };

  const FormDatas = [
    {
      label: "이메일",
      value: email,
      type: "email",
      onChange: setEmail,
      message: "이메일을 입력해주세요",
    },
    {
      label: "비밀번호",
      value: password,
      type: "password",
      onChange: setPassword,
      message: "비밀번호를 입력해주세요",
    },
  ];

  return (
    <MainContainer bg_color="black">
      <h3 className="fw-bold mb-4">Live & Move 로그인</h3>

      <Form onSubmit={handleSubmit}>
        {FormDatas.map(({ label, value, type, onChange, message }, index) => {
          return (
            <FloatingLabel
              key={label + index}
              label={label}
              className="mb-3"
              style={{ color: "darkgrey" }}
            >
              <Form.Control
                style={{ borderRadius: 0 }}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type={type}
                placeholder=""
                required
                isInvalid={value === ""}
                isValid={value.length > 0}
              />
              {isValidMessage(message)}
            </FloatingLabel>
          );
        })}
        <Form.Check label="아이디 저장하기" className="mb-3" />
        {/* 로그인 버튼 */}
        <ButtonInLogin
          bg_color={"lightgray"}
          border_color={"lightgray"}
          font_color={"white"}
          type="submit"
        >
          로그인
        </ButtonInLogin>
      </Form>
      <span
        style={{
          fontSize: "13px",
          color: "darkgrey",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <ALink color="lightgray" href="/account">
          아이디 찾기
        </ALink>
        <ALink color="lightgray" href="/account">
          비밀번호 찾기
        </ALink>
        <ALink color="#005781" href="/user/signup">
          회원가입
        </ALink>
      </span>

      <SpanCol font_size="13px" font_color="darkgrey">
        로그인이 어려우신가요?
      </SpanCol>
      <SpanCol>
        <KakaoLoginPage />
      </SpanCol>
      <SpanCol font_size="16px" font_color="lightgrey">
        고객센터
      </SpanCol>
      <div
        style={{ backgroundColor: "lightgray", width: "100%", height: "1px" }}
      />

      <SpanCol font_size="15px" font_color="lightgrey">
        사업자 회원가입
      </SpanCol>
    </MainContainer>
  );
}

export default LoginPage;
