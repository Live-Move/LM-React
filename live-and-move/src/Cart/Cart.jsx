import React from "react";
import { Button, CloseButton, Col, Container, Form, Image, Row } from "react-bootstrap";
import { ColCard, Div2, FormCheckStyled } from "./CSS/Cart";


const Choice = [
  {
      id : 1,
      src : "https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1315067_pe940386_s5.jpg?f=m",
      name : "가구1",
      content : "의자1",
      price : 600000
  },
]


function Cart(props) {
  return (
    <>
      <Container>
        <h2 style={{ margin: "3rem" }}> 장바구니 </h2>
        <Row>
          <Col md={8}>
            <Form>
              <FormCheckStyled type="checkbox" id="1" label="전체선택"  />
            </Form>
            <hr />
            <strong style={{fontSize:"1.2rem"}}>구독상품</strong>
            <hr />
            <ColCard>
            {Choice.map((item,index)=>{
              return (
            <Div2 key={index} >
                <Form.Check label={item.name}/>
                <Image src={item.src} style={{width:"10%"}}/>
                <span>{item.price} 원</span>
                <CloseButton />
              </Div2>
              );
            })}
            </ColCard>
            <Button>선택상품삭제</Button>
          </Col>
          <Col style={{border: "1px solid #878787"}}>
            <h4>주문 예상 금액</h4>
            <div>
            <span>총 구독상품 금액 {} 원</span>
            </div>
            <div>
            <span>총 할인 금액  {} 원</span>
            </div>
            <div>
            <span>총 배송비 {} 원</span>
            </div>
            <div>
            <hr />
            <span>결제 금액: {} 원</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
