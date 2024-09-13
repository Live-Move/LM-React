import React, { useState } from "react";
import { ButtonInLogin, MainContainer } from "../Login/CSS/LoginCss";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function SignupPage(props) {
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userChkPw, setUserChkPw] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // 로그인 이벤트
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let data = {
  //     loginId: email,
  //     password: password,
  //   };
  //   fetch("http://localhost:8080/api/user/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       alert(data.code === "ok" ? "로그인 성공" : "로그인 실패");
  //       console.log(data.code); // ok , fail
  //       console.log(data.data); // 회원정보
  //     });

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`[userName]:${userName} [userBirth]:${userBirth}`);

    let data = {
      name: userName,
      login_id: userId,
      password: userPw,
    };
  };

  const FormDatas = [
    {
      label: "이름 입력",
      value: userName,
      type: "text",
      onChange: setUserName,
      messages: [],
    },
    {
      label: "주소 입력",
      value: userAddress,
      type: "text",
      onChange: setUserAddress,
      messages: [],
    },
    {
      label: "생년-월-일 입력",
      value: userBirth,
      type: "date",
      onChange: setUserBirth,
      messages: [],
    },
    {
      label: "이메일 입력",
      value: userId,
      type: "email",
      onChange: setUserId,
      messages: [
        "ㆍ4 ~ 20자리의 영문 또는 +숫자만 입력해주세요.",
        "ㆍ아이디는 대소문자 구분합니다.",
      ],
    },
    {
      label: "비밀번호 입력",
      value: userPw,
      type: "password",
      onChange: setUserPw,
      messages: ["ㆍ영문, 숫자, 특수문자를 포함 8 ~ 30자리로 입력해주세요."],
    },
    {
      label: "비밀번호 확인",
      value: userChkPw,
      type: "password",
      onChange: setUserChkPw,
      messages: [],
    },
  ];

  return (
    <MainContainer>
      <Form onSubmit={handleSignup}>
        {FormDatas.map(({ label, value, type, onChange, messages }, index) => {
          return (
            <FloatingLabel
              key={label + index}
              label={label}
              className="mb-1"
              style={{ color: "darkgrey", marginBottom: "4px" }}
            >
              <Form.Control
                style={{ borderRadius: 0 }}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type={type}
                placeholder=""
                required
              />
              {messages.map((m, index) => {
                return (
                  <p className="mb-1" key={index}>
                    {m}
                  </p>
                );
              })}
            </FloatingLabel>
          );
        })}
        <Row>
          <Col xs={6} style={{ paddingRight: 0 }}>
            <FloatingLabel
              label="이메일"
              className="mb-3"
              style={{ color: "darkgrey" }}
            >
              <Form.Control
                style={{ borderRadius: 0, height: "100%" }}
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                type="text"
                placeholder=""
                required
              />
            </FloatingLabel>
          </Col>
          <Col xs={6} style={{ paddingLeft: 0 }}>
            <Form.Select style={{ borderRadius: 0, height: "58px" }}>
              <option>{"@naver.com"}</option>
              <option>{"@google.com"}</option>
              <option>{"@go.kr"}</option>
              <option>{"@naver.com"}</option>
              <option>{"@naver.com"}</option>
            </Form.Select>
          </Col>
        </Row>
        <p style={{ color: "darkgray" }}>
          {"ㆍ특수문자[-], [_]만 사용가능합니다."}
        </p>
        <ButtonInLogin type="submit">회원가입</ButtonInLogin>
      </Form>
    </MainContainer>
  );
}

export default SignupPage;
