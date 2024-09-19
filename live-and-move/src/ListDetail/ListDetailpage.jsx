import React, { useState } from "react";
import {Carousel,Col,Container,Form,Image,Offcanvas,Row,} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  ButtonBS,
  CarouselContainer,
  PinIcon,
  CheckCircle,
  SpanColor,
  QuestionCircle,
  ButtonJB,
  ButtonBG,
  ImageBT,
  Button1,
  Div1,
  Input1,
  Div2,
} from "./CSS/Detail";

function ListDetailpage(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const BottomImage = [
    {
      num: "1",
      src: "https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1341194_ph198635_s5.jpg?f=m",
      path: "/",
    },
    {
      num: "2",
      src: "https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1315067_pe940386_s5.jpg?f=m",
      path: "/",
    },
    {
      num: "3",
      src: "https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1306384_ph197204_s5.jpg?f=m",
      path: "/",
    },
  ];

  const BottomImageList =
    BottomImage.length >= 5
      ? BottomImage.slice(0, 5) //이미지 5개 이상이면 처음 5개만 출력
      : BottomImage.concat(Array(5 - BottomImage.length).fill(BottomImage[0])); // 5개이하 남은 공간 첫 번째 이미지로 채우기

  const [name, setName] = useState("상품 이름은 여기");
  const [itemNum, setItemNum] = useState(1); // 제품 수량
  const [price, setPrice] = useState(15000); // 제품 가격
  const price1 = price.toLocaleString("ko-KR");
  const total = price * itemNum;
  return (
    <>
      <body style={{marginTop:"5em"}}>
        <Container>
          <Row></Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <CarouselContainer>
                <Col>
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                      <Image
                        style={{ width: "auto", height: "auto" }}
                        text="First slide"
                        src="https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1315067_pe940386_s5.jpg?f=m"
                      />
                      <Carousel.Caption>
                        <h3 style={{ color: "black" }}>First slide label</h3>
                        <p style={{ color: "black" }}>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image
                        style={{ width: "auto", height: "auto" }}
                        text="Second slide"
                        src="https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1306384_ph197204_s5.jpg?f=m"
                      />
                      <Carousel.Caption>
                        <h3 style={{ color: "black" }}>Second slide label</h3>
                        <p style={{ color: "black" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image
                        style={{ width: "auto", height: "auto" }}
                        text="Third slide"
                        src="https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1341194_ph198635_s5.jpg?f=m"
                      />
                      <Carousel.Caption>
                        <h3 style={{ color: "black" }}>Third slide label</h3>
                        <p style={{ color: "black" }}>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </CarouselContainer>
              <ButtonBS variant="secondary" onClick={handleShow}>
                <PinIcon /> 배송 가능한 지역을 확인하세요!
              </ButtonBS>
            </Col>
            <Offcanvas
              show={show}
              onHide={handleClose}
              style={{ width: "35em", height: "auto" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <h3>배송 가능 지역.</h3>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Image
                  style={{ width: "90%", height: "auto", margin:"40px"}}
                  src="https://thesalgu.com/static/media/map.2319c8a13824e2e94c7c.png"/>
              </Offcanvas.Body>
            </Offcanvas>
            <Col>
              <h1>{name}</h1>
              <h4 style={{ marginTop: "60px" }}>
                월 <span>{price1}원</span> ~{" "}
              </h4>
              <Col>
                <br />
                <span>
                  <CheckCircle /> <SpanColor>12개월</SpanColor> 사용후
                  <SpanColor>소유</SpanColor>
                  하시거나 <SpanColor>무료로 회수</SpanColor>를 신청할 수
                  있어요.
                </span>
              </Col>
              <Col>
                <span>
                  <CheckCircle /> 한번도 사용하지 않은{" "}
                  <SpanColor>새 제품</SpanColor> 이에요.
                </span>
              </Col>
              <br />

              <span>
                배송비 <QuestionCircle />
              </span>
              <Div2>
                <span> 총 금액:</span>
                <span> {total.toLocaleString("ko-KR")} 원</span>
              </Div2>
              <hr />
              <Div2>
                <Div1>
                  <Button1 onClick={() => setItemNum(itemNum - 1)}>-</Button1>
                  <Input1 type="number" value={itemNum} readOnly />
                  <Button1 onClick={() => setItemNum(itemNum + 1)}>+</Button1>
                </Div1>
                <span>
                  수량 : <strong>{itemNum}</strong> 개
                </span>
              </Div2>

              <Form.Select aria-label="Default select example">
                <option value="" selected hidden>
                  옵션 선택
                </option>
                <option value="1year">12개월</option>
                <option value="2year">24개월</option>
                <option value="3year">36개월</option>
              </Form.Select>
              <ButtonJB variant="secondary" href="/cart">
                장바구니
              </ButtonJB>
              <ButtonBG variant="secondary" href="/">
                바로구매
              </ButtonBG>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            {BottomImageList.map(({ src, path }, index) => {
              return (
                <Col key={index}>
                  <NavLink to={path} activeClassName="selected">
                    <ImageBT
                      src={src}
                      alt={`Bottom image ${index + 1}`}
                      rounded
                    />
                  </NavLink>
                </Col>
              );
            })}
          </Row>
        </Container>
      </body>

      <footer></footer>
    </>
  );
}

export default ListDetailpage;
