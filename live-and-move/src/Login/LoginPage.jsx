import React from "react";
import { useState } from "react";

// CSS from LoginCSS
import { ALink, MainContainer, ButtonInLogin, SpanCol } from "./CSS/LoginCss";

// bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";

const isValidMessage = (message) => {
  return (
    <Form.Control.Feedback type="invalid">{message}</Form.Control.Feedback>
  );
};

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();

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
        console.log(data.data); // 회원정보
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
    <MainContainer bgColor="black">
      <h3 className="fw-bold mb-4">Live & Move</h3>

      <ButtonGroup className="mb-3">
        {[{ title: "로그인" }, { title: "비회원 주문조회" }].map(
          ({ title }, index) => {
            return (
              <Col xs={6}>
                <ButtonInLogin
                  key={title + index}
                  backColor={"#FFFFFF"}
                  borderColor={"lightgray"}
                  fontColor={"lightgray"}
                >
                  {title}
                </ButtonInLogin>
              </Col>
            );
          }
        )}
      </ButtonGroup>

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
              />
              {isValidMessage(message)}
            </FloatingLabel>
          );
        })}
        <Form.Check label="아이디 저장하기" className="mb-3" />
        {/* 로그인 버튼 */}
        <ButtonInLogin
          backColor={"lightgray"}
          borderColor={"lightgray"}
          fontColor={"white"}
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
        <ALink color="lightgray" href="/">
          아이디 찾기
        </ALink>
        <ALink color="lightgray" href="/">
          비밀번호 찾기
        </ALink>
        <ALink color="#005781" href="/user/signup">
          회원가입
        </ALink>
      </span>

      <SpanCol fontSize="13px" fontColor="darkgrey">
        로그인이 어려우신가요?
      </SpanCol>
      <SpanCol fontSize="16px" fontColor="lightgrey">
        고객센터
      </SpanCol>
      <div
        style={{ backgroundColor: "lightgray", width: "100%", height: "1px" }}
      />
      <SpanCol fontSize="15px" fontColor="lightgrey">
        사업자 회원가입
      </SpanCol>
    </MainContainer>
  );
}

export default LoginPage;
