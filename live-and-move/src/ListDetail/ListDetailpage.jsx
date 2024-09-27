import React, { useEffect, useState } from "react";

import {
  CarouselContainer,
  CheckCircle,
  SpanColor,
  QuestionCircle,
  ButtonJB,
  ImageBT,
  Button1,
  Div1,
  Input1,
  Div2,
  Div3,
} from "./CSS/Detail";
import { GoArrowRight } from "react-icons/go";
import OffcanvasBS from "./OffcanvasBS";

function ListDetailpage(props) {
  const params = useParams();

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const [items, setItems] = useState([]);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  const Items = [
    {
      product_id: 1,
      src: "https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1315067_pe940386_s5.jpg?f=m",
      product_name: "product_name",
      category: "category",
      content: "content",
      brand: "brand",
      description:
        "흰색을 좋아하는 분들을 위한 제품이에요. 깔끔한 라인과 반투명 유리의 탁상스탠드가 방 안에 따뜻하고 기분 좋은 분위기를 연출해주는 부드러운 조명을 비춰줍니다.",
      detail:
        "부드러운 느낌의 무드등입니다.디자이너IKEA of Sweden디자이너IKEA of Sweden",
      price: 60000,
      path: "/listdetail",
    },
  ];

  const BottomImage = [
    {
      product_id: "1",
      src: "https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1341194_ph198635_s5.jpg?f=m",
      path: "/",
    },
  ];

  const BottomImageList =
    BottomImage.length >= 5
      ? BottomImage.slice(0, 5) //이미지 5개 이상이면 처음 5개만 출력
      : BottomImage.concat(Array(5 - BottomImage.length).fill(BottomImage[0])); // 5개이하 남은 공간 첫 번째 이미지로 채우기


  const [itemNum, setItemNum] = useState(1); // 제품 수량
  const [price, setPrice] = useState(Items[0].price); // 제품 가격
  const price1 = price.toLocaleString("ko-KR");
  const total = price * itemNum;

  
  
  return (
    <>
      <div style={{ marginTop: "5em" }}>
        <Container>
          <Row></Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <CarouselContainer>
                <Col>

                  </Carousel>
                </Col>
              </CarouselContainer>

              <OffcanvasBS />
              <hr />
              <Div3 type="button" onClick={handleShow}>
                <h2>제품 설명</h2>
                <GoArrowRight style={{ fontSize: "2rem" }} />
              </Div3>
              <hr />
              <Div3 type="button">
                <h2>상품평</h2>
                <GoArrowRight style={{ fontSize: "2rem" }} />
              </Div3>
              <hr />
            </Col>
            <Offcanvas
              placement="end"
              show={show}
              onHide={handleClose}
              style={{ width: "30em", height: "auto", padding: "2em" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <h2>상품 설명</h2>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h5>{description}</h5>
                <hr />
                <h6>{detail}</h6>
                <h3>{brand}</h3>
              </Offcanvas.Body>
            </Offcanvas>
            <Col>
              <h1>{name}</h1>
              <h6>{brand}</h6>
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
              <Div2>
                <span>
                  배송비 <QuestionCircle />
                </span>
                <span>10000 원</span>
              </Div2>
              <hr />
              <FormSelect
                aria-label="Default select example"
                style={{ marginBottom: "1em" }}
              >
                <option value="옵션 선택" defaultValue hidden>
                  옵션 선택
                </option>
                <option value="1year">12개월</option>
                <option value="2year">24개월</option>
                <option value="3year">36개월</option>
              </FormSelect>
              <Div2>
                <Div1>
                  <Button1
                    onClick={() => {
                      if (itemNum > 0) {
                        setItemNum(itemNum - 1);
                      }
                    }}
                  >
                    {" "}
                    -{" "}
                  </Button1>
                  <Input1 type="number" value={itemNum} readOnly />
                  <Button1 onClick={() => setItemNum(itemNum + 1)}> + </Button1>
                </Div1>
                <span>
                  수량 : <strong style={{ color: "#4646e2" }}>{itemNum}</strong>{" "}
                  개
                </span>
              </Div2>
              <hr />
              <Div2>
                <strong>최종 구독가:</strong>
                <strong style={{ fontSize: "1.2rem" }}>
                  월 {total.toLocaleString("ko-KR")} 원
                </strong>
              </Div2>

              </ButtonJB>
              <ButtonJB variant="secondary" href="/" bg_color="#7E80AB">
                바로구매
              </ButtonJB>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            {BottomImageList.map(({ src, path }, index) => {
              return (
                <Col key={index}>
                  <NavLink to={path}>
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
      </div>

      <footer></footer>
    </>
  );
}

export default ListDetailpage;
