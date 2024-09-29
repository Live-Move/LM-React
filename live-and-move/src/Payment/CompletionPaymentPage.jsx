import React from "react";
import { Button, Container } from "./CompletionPaymentPageCss";

function CompletionPaymentPage(props) {
  return (
    <Container>
      <div>
        <div className="upper-section">
          <img
            src="https://github.com/Live-Move/LM-Photos/blob/main/Payment/%EA%B2%B0%EC%A0%9C%EC%99%84%EB%A3%8C%EC%82%AC%EC%A7%84.png?raw=true"
            alt="결제완료 이미지"
          />
          <div className="textContainer">
            <h3>주문이 완료되었습니다</h3>
          </div>
        </div>

        <div className="lower-section">
          <Button>마이 페이지</Button>
          <Button>계속 쇼핑하기</Button>
        </div>
      </div>
    </Container>
  );
}

export default CompletionPaymentPage;
