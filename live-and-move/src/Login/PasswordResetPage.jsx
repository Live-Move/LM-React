import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  ButtonRestPW,
  Container,
  PageContainer,
} from "./CSS/PasswordResetPageCss";
import { isSessionExists } from "./Account/AccountChk";

function PasswordResetPage(props) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isRender = useRef(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("[ useEffect ]");
    if (isRender.current) {
      isRender.current = false;

      if (sessionStorage.getItem("isPwUpdate")) {
        setCurrentPassword(isSessionExists().password);
      }
    }
  }, [isRender]);

  // 비밀번호 변경 요청 처리
  const handlePasswordChange = (e) => {
    e.preventDefault();

    // 새 비밀번호와 확인 비밀번호가 같은지 확인
    if (newPassword !== confirmPassword) {
      setErrorMessage("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    const data = {
      user_id: isSessionExists().user_id,
      currentPassword: currentPassword,
      newPassword: newPassword,
    };

    // 비밀번호 변경 API 호출
    fetch("http://localhost:8080/api/user/resetPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.code === "ok") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "비밀번호가 성공적으로 변경되었습니다.",
            showConfirmButton: false,
            timer: 1500,
          });

          sessionStorage.clear(); // 세션 업데이트
          sessionStorage.setItem("userData", JSON.stringify(data.data_upd));

          navigate("/"); // 시작 페이지로 이동
        } else {
          setErrorMessage("비밀번호 변경에 실패했습니다.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("서버 오류가 발생했습니다. 다시 시도해주세요.");
      });
  };

  return (
    <PageContainer>
      <Container bg_color="black">
        <h3 className="fw-bold mb-4">비밀번호 재설정</h3>
        <Form onSubmit={handlePasswordChange}>
          {/* 현재 비밀번호 입력 */}
          <FloatingLabel
            label="현재 비밀번호"
            className="mb-3"
            style={{ color: "darkgrey" }}
          >
            <Form.Control
              type="password"
              style={{ borderRadius: 0 }}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="현재 비밀번호"
              required
            />
          </FloatingLabel>

          {/* 새 비밀번호 입력 */}
          <FloatingLabel
            label="새 비밀번호"
            className="mb-3"
            style={{ color: "darkgrey" }}
          >
            <Form.Control
              style={{ borderRadius: 0 }}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              placeholder="새 비밀번호"
              required
            />
          </FloatingLabel>

          {/* 새 비밀번호 확인 */}
          <FloatingLabel
            label="새 비밀번호 확인"
            className="mb-3"
            style={{ color: "darkgrey" }}
          >
            <Form.Control
              style={{ borderRadius: 0 }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="새 비밀번호 확인"
              required
            />
          </FloatingLabel>

          {/* 에러 메시지 표시 */}
          {errorMessage && (
            <p style={{ color: "red", marginBottom: "1em" }}>{errorMessage}</p>
          )}

          {/* 비밀번호 변경 버튼 */}
          <ButtonRestPW font_color="white" type="submit">
            비밀번호 변경
          </ButtonRestPW>
        </Form>
      </Container>
    </PageContainer>
  );
}

export default PasswordResetPage;
