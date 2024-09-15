import React from "react";
import { Button, CloseButton, Col, Container, Form, Row } from "react-bootstrap";
import { Div2, FormCheckStyled } from "./CSS/Cart";


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
            <Col style={{border: "1px solid #878787"}}>

            <Div2>
                <Form.Check label="상품이름"/>
                <CloseButton />
              </Div2>

            </Col>
            <Button>선택상품삭제</Button>
          </Col>
          <Col style={{border: "1px solid #878787"}}>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
