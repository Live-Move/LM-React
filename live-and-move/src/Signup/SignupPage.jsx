import React, { useState } from "react";
import { ButtonInLogin, DivSignup, MainContainer } from "../Login/CSS/LoginCss";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function SignupPage(props) {
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userChkPw, setUserChkPw] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userDomain, setUserDomain] = useState("선택해주세요.");
  const [userPhone, setUserPhone] = useState("");
  const navigage = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    let data = {
      name: userName,
      loginId: userId,
      password: userPw,
      address: userAddress,
      email: userEmail + userDomain,
      phone: userPhone,
      birth: userBirth,
      point: 100000,
    };

    fetch("http://localhost:8080/api/user/signup", {
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
        Swal.fire({
          position: "center",
          icon: "success",
          title: data.code === "ok" ? "회원가입 성공" : "[ 회원가입 실패 ]",
          text:
            data.code === "ok"
              ? `첫 가입 ${100000} 포인트를 지급 해드렸습니다.`
              : "이미 존재하는 아이디 입니다",
          showConfirmButton: false,
          timer: 3000,
        });
        console.log(data.code); // ok , fail

        if (data.code === "ok") {
          navigage("/user/login");
        }
      });
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
      label: "전화번호 입력",
      value: userPhone,
      type: "text",
      onChange: setUserPhone,
      messages: [],
    },
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
    <DivSignup>
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
          <Col xs={6} onChange={setUserDomain} style={{ paddingLeft: 0 }}>
            <Form.Select style={{ borderRadius: 0, height: "60px" }}>
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
        <ButtonInLogin font_color={"white"} type="submit">
          회원가입
        </ButtonInLogin>
      </Form>
    </DivSignup>
  );
}

export default SignupPage;
