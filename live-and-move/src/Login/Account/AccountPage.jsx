import React, { useState } from "react";
import { ButtonGroup, FloatingLabel, Form } from "react-bootstrap";
import {
  ButtonInLogin,
  MainContainer,
  AccountStateButton,
} from "../CSS/LoginCss";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AccountPage(props) {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userId, setUserId] = useState("");
  const [isFindId, setIsFindId] = useState(true);
  const navigate = useNavigate();

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
      messages: [
        "회원가입 시 입력한 주소을 입력해주세요",
        "* 이메일이 아닙니다!",
      ],
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
          if (data.type === "ID") {
            Swal.fire({
              title: `ID : ${data.data}`,
              text: "live and move가 찾아준 회원님의 아이디입니다!",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: `[PW] : ${data.data.password}`,
              text: `* 새로운 비밀번호로 재설정 하시겠습니까?`,
              icon: "success",
              showCancelButton: true,
              confirmButtonColor: "#c1ab86",
              cancelButtonColor: "#edd6b9",
              confirmButtonText: "재설정 하겠습니다!",
              cancelButtonText: "다음에 변경하겠습니다",
            }).then((result) => {
              if (result.isConfirmed) {
                sessionStorage.clear();
                sessionStorage.setItem("userData", JSON.stringify(data.data));
                sessionStorage.setItem("isPwUpdate", true);
                navigate("/PasswordResetPage");
              } else {
                navigate("/user/login");
              }
            });
          }
        } else {
          Swal.fire({
            title: `정보를 다시 입력해주세요`,
            icon: "error",
          });
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
