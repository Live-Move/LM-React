import React from "react";
import {
  ButtonComp,
  Container,
  TextContainer,
  OrderInfo,
  UpperSection,
  ImageContainer,
} from "./CompletionPaymentPageCss";

function CompletionPaymentPage(props) {
  return (
    <Container style={{ fontFamily: "apple" }}>
      <div>
        <UpperSection>
          <ImageContainer>
            <img
              src="https://github.com/Live-Move/LM-Photos/blob/main/Payment/%EA%B2%B0%EC%A0%9C%EC%99%84%EB%A3%8C%EC%82%AC%EC%A7%84.png?raw=true"
              alt="결제완료 이미지"
            />
          </ImageContainer>
          <TextContainer>
            <h3>주문이 완료되었습니다.</h3>
            <OrderInfo>이용해 주셔서 감사합니다.</OrderInfo>
          </TextContainer>
        </UpperSection>

        <div className="lower-section">
          <a href="/mypage">
            <ButtonComp bgcolor={"#edd6b9"}>마이 페이지</ButtonComp>
          </a>
          <a href="/main">
            <ButtonComp bgcolor={"#c1ab86"}>계속 쇼핑하기</ButtonComp>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default CompletionPaymentPage;
//"#edd6b9" "#c1ab86"
