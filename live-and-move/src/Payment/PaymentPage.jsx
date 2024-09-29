import React from "react";
import {
  ButtonContainer,
  Container,
  OrderProduct,
  PaymentInfo,
  UserInfoContainer,
} from "./PaymentPageCss";
import { isSessionExists } from "../Login/Account/AccountChk";
import { useNavigate } from "react-router-dom";

function PaymentPage(props) {
  const navigate = useNavigate();
  const user = isSessionExists();
  // console.log(user);

  const date = new Date();
  const today = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}.${String(date.getDate()).padStart(2, "0")}`;

  const handlePayment = async () => {
    const rentalData = {
      user_id: user.id, // 예시 데이터, 실제 사용자 ID
      product_id: "12WE23123", // 상품 ID
      rental_fee: 20800, // 렌탈 요금
      start_date: new Date().toISOString().split("T")[0], // 오늘 날짜
      end_date: "2024-12-31", // 종료일 예시
      rental_status: "대여중", // 상태
    };

    try {
      const response = await fetch("http://localhost:8080/api/rental/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rentalData),
      });

      if (response.ok) {
        alert("결제가 완료되었습니다.");
        navigate("/CompletionPaymentPage");
      } else {
        alert("결제에 실패했습니다.");
      }
    } catch (error) {
      console.error("결제 요청 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <Container>
      <div>
        <OrderProduct>
          <table>
            <thead>
              <tr>
                <th colSpan="6">주문 상품</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td style={{ fontWeight: "bold" }}>상품명</td>
                <td style={{ fontWeight: "bold" }}>수량</td>
                <td style={{ fontWeight: "bold" }}>할인금액</td>
                <td style={{ fontWeight: "bold" }}>결제금액</td>
                <td style={{ fontWeight: "bold" }}>개월</td>
              </tr>
              <tr>
                <td>상품이미지</td>
                <td>깔쌈한 신발</td>
                <td>1</td>
                <td>3,000 원</td>
                <td>20,800 원</td>
                <td>12 개월</td>
              </tr>
            </tbody>
          </table>
        </OrderProduct>

        <PaymentInfo>
          <table>
            <thead>
              <tr>
                <th colSpan="2">결제정보</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: "bold" }}>상품금액</td>
                <td>12,354,835,123 원</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>배송비</td>
                <td>5000 원</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>총 결제 금액</td>
                <td>12,361,620,123 원</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>보유 포인트</td>
                <td>{user.point} point</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>남는 포인트</td>
                <td>80000 point</td>
              </tr>
            </tbody>
          </table>
        </PaymentInfo>

        <UserInfoContainer>
          <div className="user-info">
            <table>
              <thead>
                <tr>
                  <th colSpan="2">주문자 정보</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold" }}>주문코드</td>
                  <td>{user.point + 123456789}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>주문일</td>
                  <td>{today}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>이름</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>휴대폰번호</td>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>이메일</td>
                  <td>{user.email}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="delivery-info">
            <table>
              <thead>
                <tr>
                  <th colSpan="2">배송지 정보</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold" }}>이름</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>휴대폰번호</td>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>배송지주소</td>
                  <td>{user.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </UserInfoContainer>
        <ButtonContainer>
          <button className="pay-button" onClick={handlePayment}>
            결제 하기
          </button>
        </ButtonContainer>
      </div>
    </Container>
  );
}

export default PaymentPage;
