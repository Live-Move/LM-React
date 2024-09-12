import React, { useState } from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { ButtonBS, CarouselContainer,PinIcon } from "./CSS/Detail";



function ListDetailpage(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <header>
        <h1>Detail page</h1>
      </header>

      <body>
        <Container>
          <Row>

          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <CarouselContainer>
                <Col>
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                      <Image
                        style={{ width: "500px", height: "auto" }}
                        text="First slide"
                        src="https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1315067_pe940386_s5.jpg?f=m"
                      />
                      <Carousel.Caption>
                        <h3 style={{color:"black"}}>First slide label</h3>
                        <p style={{color:"black"}}>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image
                        style={{ width: "500px", height: "auto" }}
                        text="Second slide"
                        src="https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1306384_ph197204_s5.jpg?f=m"
                      />
                      <Carousel.Caption>
                        <h3 style={{color:"black"}}>Second slide label</h3>
                        <p style={{color:"black"}}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image
                        style={{ width: "500px", height: "auto" }}
                        text="Third slide"
                        src="https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1341194_ph198635_s5.jpg?f=m"
                      />
                      <Carousel.Caption>
                        <h3 style={{color:"black"}}>Third slide label</h3>
                        <p style={{color:"black"}}>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </CarouselContainer>
        <ButtonBS><PinIcon/> 배송 가능한 지역을 확인하세요!</ButtonBS>
            </Col>
            
            <Col>
            <h1>상품 이름은 여기</h1>
            <h4 style={{ marginTop: '60px' }}>월 20,000원 ~ </h4>
            <p style={{ marginTop: '20px' }}>12개월 사용후 소유하시거나 무료로 회수를 신청할 수 있어요.</p>
            </Col>
          </Row>
        </Container>
        
      </body>

      <footer></footer>
    </>
  );
}

export default ListDetailpage;
