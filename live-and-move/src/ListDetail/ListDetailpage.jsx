import React, { useState } from "react";
import { Carousel, Col, Container, Form, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  ButtonBS,
  CarouselContainer,
  PinIcon,
  CheckCircle,
  SpanColor,
  QuestionCircle,
  ButtonJB,
  ButtonBG,ImageBT
} from "./CSS/Detail";

function ListDetailpage(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  

  const BottomImage = [
    {
      num:"1",
      src:"https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1341194_ph198635_s5.jpg?f=m",
      path:"/",
    },
    {
      num:"2",
      src:"https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1315067_pe940386_s5.jpg?f=m",
      path:"/",
    },
    {
      num:"3",
      src:"https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1306384_ph197204_s5.jpg?f=m",
      path:"/",
    },
  ]

const BottomImageList = BottomImage.length >=5 
? BottomImage.slice(0,5)//이미지 5개 이상이면 처음 5개만 출력
: BottomImage.concat(Array(5 - BottomImage.length).fill(BottomImage[0]));// 5개이하 남은 공간 첫 번째 이미지로 채우기
  return (
    <>
      <header>
        <h1>Detail page</h1>
      </header>

      <body>
        <Container>
          <Row></Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <CarouselContainer>
                <Col >
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
              <ButtonBS variant="secondary">
              <PinIcon /> 배송 가능한 지역을 확인하세요!
              </ButtonBS>
            </Col>

            <Col>
              <h1>상품 이름은 여기</h1>
              <h4 style={{ marginTop: "60px" }}>월 <span>20,000원</span> ~ </h4>
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

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> 
              <span>
                배송비 <QuestionCircle />
              </span>
              <span>금액: <span>500</span> 원</span>
                </div>
              <hr />
              <Form.Select aria-label="Default select example" >
                <option value="" selected hidden>
                  옵션 선택
                </option>
                <option value="1year">12개월</option>
                <option value="2year">24개월</option>
                <option value="3year">36개월</option>
              </Form.Select>
              <ButtonJB variant="secondary" href="/">장바구니</ButtonJB>
              <ButtonBG variant="secondary" href="/">바로구매</ButtonBG>
            </Col>
          </Row>
        </Container>
        <Container>
      <Row>
        {BottomImageList.map(({src, path}, index)=>{
          return(
            <Col key={index}>
              <NavLink to={path} activeClassName="selected" >
            <ImageBT src={src} alt={`Bottom image ${index + 1}`} rounded />
              </NavLink>
            </Col>
          )
        })}
      </Row>
    </Container>
      </body>

      <footer></footer>
    </>
  );
}

export default ListDetailpage;
