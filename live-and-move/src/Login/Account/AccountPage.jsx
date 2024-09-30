import React, { useState } from "react";
import { ButtonGroup, FloatingLabel, Form } from "react-bootstrap";
import {
  ButtonInLogin,
  MainContainer,
  AccountStateButton,
} from "../CSS/LoginCss";

function AccountPage(props) {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userId, setUserId] = useState("");
  const [isFindId, setIsFindId] = useState(true);

  const FormDatasFindId = [
    {
      label: "이름 입력",
      value: userName,
      type: "text",
      onChange: setUserName,
      messages: [],
    },
    {
      label: "연락처 입력",
      value: userPhone,
      type: "text",
      onChange: setUserPhone,
      messages: ["000-0000-0000 형식으로 입력해주세요"],
    },
    {
      label: "주소 입력",
      value: userAddress,
      type: "text",
      onChange: setUserAddress,
      messages: ["회원가입 시 입력한 이메일을 입력해주세요"],
    },
  ];

  const FormDatasFindPw = [
    {
      label: "이름 입력",
      value: userName,
      type: "text",
      onChange: setUserName,
      messages: [],
    },
    {
      label: "아이디 입력",
      value: userId,
      type: "text",
      onChange: setUserId,
      messages: [],
    },
  ];

  const handleFindStatus = (b) => {
    // 조건부 렌더링
    setIsFindId(b);

    // 버튼 클릭 시 Form태그 값 초기화
    setUserAddress("");
    setUserId("");
    setUserName("");
    setUserPhone("");
  };

  const handleFindInfo = (e) => {
    e.preventDefault();

    let data = {
      name: userName ? userName : null,
      loginId: userId ? userId : null,
      address: userAddress ? userAddress : null,
      phone: userPhone ? userPhone : null,
    };

    console.log(data);

    fetch("http://localhost:8080/api/user/findInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(`[ response ] >> ${response}`);
        return response.json();
      })
      .then((data) => {
        console.log(data.code); // ok , fail
        if (data.code === "ok") {
          if (data.type === "ID") alert(`[ 회원 아이디 ] >> ${data.data}`);
          else alert(`[ 회원 비밀번호 ] >> ${data.data}`);
        }
      });
  };

  return (
    <>
      <MainContainer>
        <ButtonGroup>
          <AccountStateButton
            bgcolor={isFindId ? "#c1ab86" : "white"}
            font_color={isFindId ? "white" : "none"}
            onClick={() => handleFindStatus(true)}
          >
            아이디 찾기
          </AccountStateButton>
          <AccountStateButton
            bgcolor={!isFindId ? "#c1ab86" : "white"}
            font_color={!isFindId ? "white" : "none"}
            onClick={() => handleFindStatus(false)}
          >
            비밀번호 찾기
          </AccountStateButton>
        </ButtonGroup>
        <Form onSubmit={handleFindInfo}>
          {(isFindId ? FormDatasFindId : FormDatasFindPw).map(
            ({ label, value, type, onChange, messages }, index) => {
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
            }
          )}
          <ButtonInLogin type="submit">찾기</ButtonInLogin>
        </Form>
      </MainContainer>
    </>
  );
}

export default AccountPage;
