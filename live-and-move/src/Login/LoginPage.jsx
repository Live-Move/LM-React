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
        console.log(data.code);
        console.log(data.data);
      });
  };

  return (
    <div
      className="m-2 p-5 d-grid gap-3"
      style={{
        backgroundColor: "black",
        opacity: 0.8,
        maxWidth: "450px",
        minHeight: "100px",
        color: "white",
        marginBottom: "20px",
      }}
    >
      <h3 className="fw-bold mb-4">Sign In</h3>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          label="이메일"
          className="mb-3"
          style={{ color: "darkgrey" }}
        >
          <Form.Control
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder=""
            required
            isInvalid={email === ""}
          />
          {isValidMessage("이메일 형식이 옳바르지 않습니다")}
        </FloatingLabel>
        <FloatingLabel label="패스워드" style={{ color: "darkgrey" }}>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="Password"
            placeholder=""
            required
            isInvalid={password === ""}
          />
          {isValidMessage("패스워드를 입력해주세요")}
        </FloatingLabel>
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
      {/* 로그인 버튼 */}
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
    </div>
  );
}

export default LoginPage;
