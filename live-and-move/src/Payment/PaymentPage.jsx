import React, { useState, useEffect, useRef } from "react";
import {
  ButtonContainer,
  Container,
  OrderProduct,
  PayButton,
  PaymentInfo,
  UserInfoContainer,
} from "./PaymentPageCss";
import { isSessionExists } from "../Login/Account/AccountChk";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function PaymentPage(props) {
  const navigate = useNavigate();
  // 유저 정보
  // const [user, setUser] = useState(isSessionExists());
  const user = useRef(isSessionExists());

  // 장바구니 정보 및 상품 정보 상태 추가
  const [cartItems, setCartItems] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // 현재 날짜를 구하는 함수
  const date = new Date();
  const today = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}.${String(date.getDate()).padStart(2, "0")}`;

  // 장바구니 데이터를 불러오는 함수
  const fetchCartData = async (userId) => {
    try {
      const response = await fetch("http://localhost:8080/api/cart/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: user.current.user_id }), // user_id를 포함하여 서버로 전송
      });

      if (response.ok) {
        const data = await response.json();
        setCartItems(data.data_cart); // 장바구니 정보 설정
        setProductInfo(data.data_img); // 상품 정보 설정
      } else {
        console.error("Failed to fetch cart data");
      }
    } catch (error) {
      console.error("Error while fetching cart data:", error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  // 모달 열기 함수
  const handleOpenModal = () => {
    setShowModal(true); // 모달을 열기
  };

  // 모달 닫기 함수
  const handleCloseModal = () => {
    setShowModal(false); // 모달을 닫기
  };

  // 모달에서 결제하기를 눌렀을 때 결제 함수 호출
  const handleConfirmPayment = () => {
    handlePayment();
    setShowModal(false); // 결제 후 모달 닫기
  };

  // 결제 요청을 처리하는 함수 (대여테이블에 상품 정보 create)
  const handlePayment = async () => {
    const totalPayment = Number(totalPrice) + Number(deliveryFee);
    if (user.current.point < totalPayment) {
      alert("포인트가 부족합니다. 결제를 진행할 수 없습니다.");
      return; // 결제 진행 중단
    }

    const rentalData = cartItems.map((item, index) => {
      // 현재 날짜로 시작일 설정
      const startDate = new Date();
      // 개월 수를 더해서 종료일을 계산
      const endDate = new Date(startDate);
      endDate.setMonth(endDate.getMonth() + item.month); // item.month 만큼 개월을 더함

      return {
        user_id: user.current.user_id, // 사용자 회원번호
        loginId: user.current.loginId, // 사용자 ID
        product_id: item.product_id, // 상품 ID
        rental_fee: item.price, // 렌탈 요금
        start_date: startDate.toISOString().split("T")[0], // 시작일 (YYYY-MM-DD)
        end_date: endDate.toISOString().split("T")[0], // 종료일 (YYYY-MM-DD)
        rental_status: "대여중", // 상태
      };
    });

    // rentalData 배열을 개별적으로 보내기
    try {
      for (const rentalItem of rentalData) {
        const response = await fetch("http://localhost:8080/api/rental/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(rentalItem),
        });

        if (!response.ok) {
          throw new Error("Failed to send rental data for: " + rentalItem);
        }
      }

      // 결제 완료 후 장바구니 비우기 API 호출
      const clearCartResponse = await fetch(
        "http://localhost:8080/api/cart/clear",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user.current.user_id, // user_id 포함
            point: user.current.point - totalPayment, // 결제 금액 추가
          }),
        }
      );

      if (!clearCartResponse.ok) {
        throw new Error("Failed to clear cart after payment.");
      }

      const updateUserResponse = await fetch(
        "http://localhost:8080/api/user/updateInfo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user.current),
        }
      );

      // 세션 유저 데이터 업데이트 ( 포인트 갱신 )
      const res_userInfo = await updateUserResponse.json();
      user.current = res_userInfo.data;

      sessionStorage.clear();
      sessionStorage.setItem("userData", JSON.stringify(user.current));

      // 결제 완료 후 페이지 이동
      alert("결제가 완료되었습니다.");
      navigate("/CompletionPaymentPage");
    } catch (error) {
      console.error("결제 과정 중 오류 발생:", error);
      alert("결제 과정에서 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  let totalPrice = 0; // 전체 금액
  let totalMonth = 0; // 총 개월 수
  const deliveryFee = 10000; // 배송비

  // 장바구니 상품 정보 렌더링 전에 총 금액과 개월 수 계산
  cartItems.forEach((item) => {
    const product = productInfo.find(
      (product) => product.product_id === item.product_id
    );

    const productPrice = product?.price * item.quantity || 0;
    totalPrice += productPrice;
    totalMonth += item.month;
  });

  // 총 금액을 총 개월 수로 나눔
  totalPrice = totalPrice / totalMonth;
  totalPrice = totalPrice.toFixed(0);
  return (
    <Container style={{ fontFamily: "apple" }}>
      <div>
        {/* 장바구니 상품 정보 */}
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
                <td>상품명</td>
                <td>수량</td>
                <td>할인금액</td>
                <td>결제금액</td>
                <td>개월</td>
              </tr>
              {cartItems.map((item, index) => {
                // 각 상품에 해당하는 이미지와 이름을 가져옴
                const product = productInfo.find(
                  (product) => product.product_id === item.product_id
                );

                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={product?.thumbnail || "default-image.jpg"}
                        alt="상품이미지"
                        width="50" // 이미지 크기 조정
                        height="50"
                      />
                    </td>
                    <td>{product?.productName || "상품 이름"}</td>
                    <td>{item.quantity}</td>
                    <td>0 원</td>
                    <td>{product?.price * item.quantity} 원</td>
                    <td>{item.month} 개월</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </OrderProduct>
        {/* 결제 정보 */}
        <PaymentInfo>
          <table>
            <thead>
              <tr>
                <th colSpan="2">결제정보</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>상품금액</td>
                <td>{totalPrice} 원</td>
              </tr>
              <tr>
                <td>배송비</td>
                <td>{deliveryFee} 원</td>
              </tr>
              <tr>
                <td>총 결제 금액</td>
                <td>{Number(totalPrice) + Number(deliveryFee)} 원</td>
              </tr>
              <tr>
                <td>보유 포인트</td>
                <td>{user.current.point} point</td>
              </tr>
              <tr>
                <td>남는 포인트</td>
                <td>
                  {Number(user.current.point) -
                    Number(totalPrice) -
                    Number(deliveryFee)}
                  &nbsp;point
                </td>
              </tr>
            </tbody>
          </table>
        </PaymentInfo>
        {/* 유저 정보 */}
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
                  <td>주문코드</td>
                  <td>{user.current.point + 13579}</td>
                </tr>
                <tr>
                  <td>주문일</td>
                  <td>{today}</td>
                </tr>
                <tr>
                  <td>이름</td>
                  <td>{user.current.name}</td>
                </tr>
                <tr>
                  <td>휴대폰번호</td>
                  <td>{user.current.phone}</td>
                </tr>
                <tr>
                  <td>이메일</td>
                  <td>{user.current.email}</td>
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
                  <td>이름</td>
                  <td>{user.current.name}</td>
                </tr>
                <tr>
                  <td>휴대폰번호</td>
                  <td>{user.current.phone}</td>
                </tr>
                <tr>
                  <td>배송지주소</td>
                  <td>{user.current.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </UserInfoContainer>
        {/* 결제 버튼 */}
        <ButtonContainer>
          {/* 모달을 열기 위한 핸들러 */}
          <PayButton onClick={handleOpenModal}>결제 하기</PayButton>
        </ButtonContainer>

        {/* 확인용 모달 */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>결제 확인</Modal.Title>
          </Modal.Header>
          <Modal.Body>결제하시겠습니까?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              취소
            </Button>
            <Button variant="primary" onClick={handleConfirmPayment}>
              결제하기
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
}

export default PaymentPage;
