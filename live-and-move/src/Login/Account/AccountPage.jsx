import React, { useState } from "react";
import { FloatingLabel, Form, ToggleButtonGroup } from "react-bootstrap";
import { ButtonInLogin, MainContainer, ButtonInAccount } from "../CSS/LoginCss";

function AccountPage(props) {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
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
      value: userEmail,
      type: "text",
      onChange: setUserEmail,
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
    setUserEmail("");
    setUserId("");
    setUserName("");
    setUserPhone("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("찾기 버튼 클릭");
  };

  return (
    <>
      <MainContainer>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ButtonInAccount
            id="tbg-radio-1"
            value={1}
            onClick={() => handleFindStatus(true)}
          >
            아이디 찾기
          </ButtonInAccount>
          <ButtonInAccount
            id="tbg-radio-2"
            value={2}
            onClick={() => handleFindStatus(false)}
          >
            비밀번호 찾기
          </ButtonInAccount>
        </ToggleButtonGroup>
        <Form onSubmit={handleSubmit}>
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
