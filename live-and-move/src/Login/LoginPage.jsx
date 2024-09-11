import React from "react";
import { useState } from "react";
import styled from "styled-components";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FieldMessage = styled.h6`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  opacity: 0.75;
  max-width: 650px;
  max-height: 940px;
  width: 40%;
  height: auto;
  color: white;
  margin: 20px;
  padding: 30px;
  gap: 9px;
`;

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
      message: "이메일 형식이 옳바르지 않습니다",
    },
    {
      label: "패스워드",
      value: password,
      type: "password",
      onChange: setPassword,
      message: "패스워드를 입력해주세요",
    },
  ];

  return (
    <MainContainer>
      <h3 className="fw-bold mb-4">Live & Move</h3>

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
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type={type}
                placeholder=""
                required
                isInvalid={email === ""}
              />
              {isValidMessage(message)}
            </FloatingLabel>
          );
        })}
        {/* 로그인 버튼 */}
        <Button
          type="submit"
          variant="danger"
          style={{
            marginTop: "15px",
            width: "100%",
          }}
        >
          Sign In
        </Button>
      </Form>
      <FieldMessage>OR</FieldMessage>

      {/* 회원가입 버튼 */}
      <Button variant="secondary">Use a Sign-In Code</Button>

      {/* <FieldMessage>Forgot password?</FieldMessage> */}
      <Form.Check label="Remember me" />

      <span style={{ fontSize: "13px", color: "darkgrey" }}>
        아이디가 없으신가요? <a href="/">회원가입</a>
      </span>

      <span style={{ fontSize: "13px", color: "darkgrey" }}>
        비밀번호를 잊어버리셨나요? <a href="/">비밀번호 찾기</a>
      </span>

      <span style={{ fontSize: "13px", color: "darkgrey" }}>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        {"\n"}
        <a href="/">Learn more.</a>
      </span>
    </MainContainer>
  );
}

export default LoginPage;
