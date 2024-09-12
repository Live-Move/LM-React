import React, { useState } from "react";
import { MainContainer } from "../Login/CSS/LoginCss";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function SignupPage(props) {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userChkPw, setUserChkPw] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const FormDatas = [
    {
      label: "아이디 입력",
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
      {FormDatas.map(({ label, value, type, onChange, messages }, index) => {
        return (
          <FloatingLabel
            key={label + index}
            label={label}
            className="mb-1"
            style={{ color: "darkgrey" }}
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
    </MainContainer>
  );
}

export default SignupPage;
