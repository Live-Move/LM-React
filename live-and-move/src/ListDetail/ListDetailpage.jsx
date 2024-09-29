import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  Col,
  Container,
  Form,
  FormSelect,
  Image,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
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
import { isSessionExists } from "../Login/Account/AccountChk";

function ListDetailpage(props) {
  const [productData, setProductData] = useState({
    info: {},
    images: [],
  });
  const isLoadData = useRef(true);

  const params = useParams();
  const product_id = useRef(params.product_id);
  const URL_product = useRef(
    `http://localhost:8080/api/product/detail?product_id=${product_id.current}`
  );

  useEffect(() => {
    console.log("[ useEffect ]");
    const fetchData = async () => {
      console.log("[ fetchData ]");
      try {
        isLoadData.current = false;
        const response = await fetch(URL_product.current);
        const data = await response.json();
        setProductData({
          ...productData,
          info: { ...data.detail },
          images: data.images,
        });
      } catch (e) {
        console.log(e);
      }
    };
    if (isLoadData.current) {
      fetchData();
    }
  }, [isLoadData, productData]);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // 장바구니 담기
  const handleSubmit = (e) => {
    e.preventDefault();
    addCartData();
  };

  const addCartData = async () => {
    console.log(isSessionExists().user_id);
    let obj = {
      product_id: productData.info.product_id,
      user_id: isSessionExists().user_id,
      quantity: itemNum,
    };

    console.log(obj);
    const response = await fetch("http://localhost:8080/api/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    // console.log(response.json());
    const data = await response.json();
    console.log(data.code);
    // console.log(data.data);
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const BottomImageList =
    productData.images.length >= 5
      ? productData.images.slice(0, 5) //이미지 5개 이상이면 처음 5개만 출력
      : productData.images; // 5개이하 남은 공간 첫 번째 이미지로 채우기

  const [itemNum, setItemNum] = useState(1); // 제품 수량
  // const price1 = price.toLocaleString("ko-KR");
  const total = productData.info.price * itemNum;
  return (
    <>
      <div style={{ marginTop: "5em" }}>
        <Container>
          <Row></Row>
        </Container>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <CarouselContainer>
                  <Col>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                      {(productData.images.length >= 5
                        ? productData.images.slice(0, 5) //이미지 5개 이상이면 처음 5개만 출력
                        : productData.images
                      ).map(({ img_id, img_path }, index) => {
                        return (
                          <Carousel.Item key={img_id + index}>
                            <Image
                              style={{ width: "auto", height: "auto" }}
                              text={img_id}
                              src={img_path}
                            />
                          </Carousel.Item>
                        );
                      })}
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
                  <h5>{productData.info.description}</h5>
                  <hr />
                  <h6>{productData.info.detail}</h6>
                  <h3>{productData.info.brand}</h3>
                </Offcanvas.Body>
              </Offcanvas>
              <Col>
                <h1>{productData.info.productName}</h1>
                <h6>{productData.info.brand}</h6>
                <h4 style={{ marginTop: "60px" }}>
                  월 <span>{productData.info.price}원</span> ~{" "}
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
                        if (itemNum > 1) {
                          setItemNum(itemNum - 1);
                        }
                      }}
                    >
                      {" "}
                      -{" "}
                    </Button1>
                    <Input1 type="number" value={itemNum} readOnly />
                    <Button1 onClick={() => setItemNum(itemNum + 1)}>
                      {" "}
                      +{" "}
                    </Button1>
                  </Div1>
                  <span>
                    수량 :{" "}
                    <strong style={{ color: "#4646e2" }}>{itemNum}</strong> 개
                  </span>
                </Div2>
                <hr />
                <Div2>
                  <strong>최종 구독가:</strong>
                  <strong style={{ fontSize: "1.2rem" }}>
                    월 {total.toLocaleString("ko-KR")} 원
                  </strong>
                </Div2>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "gray",
                    textAlign: "right",
                  }}
                >
                  최소사용기간 12개월/배송비별도
                </p>
                <ButtonJB type="submit" bg_color="#0C0F67">
                  장바구니 담기
                </ButtonJB>
                <ButtonJB href="/cart" bg_color="#7E80AB">
                  바로구매
                </ButtonJB>
              </Col>
            </Row>
          </Form>
        </Container>
        <Container>
          <Row>
            {BottomImageList.length > 0
              ? BottomImageList.map(({ img_path, img_id }, index) => {
                  return (
                    <Col key={img_id + index}>
                      <NavLink>
                        <ImageBT
                          src={img_path}
                          alt={`Bottom image ${index + 1}`}
                          rounded
                        />
                      </NavLink>
                    </Col>
                  );
                })
              : ""}
          </Row>
        </Container>
      </div>

      <footer></footer>
    </>
  );
}

export default ListDetailpage;
