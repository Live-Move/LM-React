import React, { useState } from "react";
import { FloatingLabel, Form, ToggleButtonGroup } from "react-bootstrap";
import { ButtonInLogin, MainContainer, ButtonInAccount } from "../CSS/LoginCss";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

function AccountPage(props) {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isFindId, setIsFindId] = useState(true);

  const FormDatas = [
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("찾기 버튼 클릭");
  };

  return (
    <>
      <MainContainer>
        {/* 테스트용 버튼 */}
        <BootstrapSwitchButton
          checked={true}
          onstyle="light"
          onlabel="아이디 찾기"
          offlabel="비밀번호 찾기"
          style={{ borderRadius: "0%" }}
        />
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ButtonInAccount
            id="tbg-radio-1"
            value={1}
            onClick={() => setIsFindId(true)}
          >
            아이디 찾기
          </ButtonInAccount>
          <ButtonInAccount
            id="tbg-radio-2"
            value={2}
            onClick={() => setIsFindId(false)}
          >
            비밀번호 찾기
          </ButtonInAccount>
        </ToggleButtonGroup>
        <Form onSubmit={handleSubmit}>
          {(isFindId ? FormDatas : []).map(
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
