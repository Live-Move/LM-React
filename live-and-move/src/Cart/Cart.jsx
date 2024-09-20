import React, { useState } from "react";
import { Button, CloseButton, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Button1, ButtonDel, ColCard, Div2, FormCheckStyled, Input1 } from "./CSS/Cart";


const Choice = [
  {
      id : 1,
      src : "https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1315067_pe940386_s5.jpg?f=m",
      name : "가구1",
      content : "의자1",
      price : 600000
  },
  {
    id : 2,
    src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73qr3k_i1LIenLXL9iAogEQSP-L_YRljZug&s",
    name : "가구2",
    content : "의자2",
    price : 500000,
    path: "/",
},
{
    id : 3,
    src : "https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1315067_pe940386_s5.jpg?f=m",
    name : "가구3",
    content : "의자3",
    price : 400000,
    path: "/",
},
{
  id : 4,
  src : "https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1315067_pe940386_s5.jpg?f=m",
  name : "가구4",
  content : "의자4",
  price : 400000,
  path: "/",
},
{
id : 5,
src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73qr3k_i1LIenLXL9iAogEQSP-L_YRljZug&s",
name : "가구5",
content : "의자5",
price : 400000,
path: "/",
},
]


function Cart(props) {
  
  const [itemNum, setItemNum] = useState(1); // 제품 수량


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
            <ColCard>
            {Choice.map((item,index)=>{
              return (
                <Div2 key={index} >
                <Form.Check />
                <Image src={item.src} style={{width:"10%"}}/>
                <span>{item.name}</span>
                
                <div>
                  <Button1 onClick={() => setItemNum(itemNum - 1)}>-</Button1>
                  <Input1 type="number" value={itemNum} readOnly />
                  <Button1 onClick={() => setItemNum(itemNum + 1)}>+</Button1>
                </div>
                <span>{item.price.toLocaleString("ko-KR")} 원</span>
                <CloseButton />
              </Div2>
              );
            })}
            </ColCard>
            <hr />
            <ButtonDel variant="light">선택상품삭제</ButtonDel>
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
          <ButtonDel variant="light">상품 주문하기</ButtonDel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
