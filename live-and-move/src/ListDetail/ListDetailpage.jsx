import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  Col,
  Container,
  FormSelect,
  Image,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const itemNum = useRef(1);
  const chkMonth = useRef(12);
  const [productData, setProductData] = useState({
    info: {},
    images: [],
    itemNum: 1,
    totalPrice: 0,
    chkMonth: 12,
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
          totalPrice: Math.ceil(data.detail.price / 12),
          chkMonth: 12,
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
    let userData = isSessionExists();
    if (userData == null) {
      alert("* 로그인 후에 이용가능한 서비스 입니다.");
      navigate("/user/login");
    } else {
      let obj = {
        product_id: productData.info.product_id,
        userId: userData.user_id,
        quantity: itemNum.current,
        month: productData.chkMonth,
      };

      console.log(obj);
      const response = await fetch("http://localhost:8080/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const data = await response.json();
      if (data.code === "fail") {
        alert("* 장바구니에 등록된 상품입니다.");
      }
      console.log(data.code);
    }
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const BottomImageList =
    productData.images.length >= 5
      ? productData.images.slice(0, 5) //이미지 5개 이상이면 처음 5개만 출력
      : productData.images; // 5개이하 남은 공간 첫 번째 이미지로 채우기

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
                월{" "}
                <span>
                  {Math.ceil(productData.info.price / 36).toLocaleString(
                    "ko-KR"
                  )}
                  원
                </span>{" "}
                ~{" "}
              </h4>
              <Col>
                <br />
                <span>
                  <CheckCircle /> <SpanColor>{chkMonth.current}개월</SpanColor>{" "}
                  사용후
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
                <span>10,000 원</span>
              </Div2>
              <hr />
              <FormSelect
                aria-label="Default select example"
                style={{ marginBottom: "1em" }}
                onChange={(e) => {
                  console.log(e.target.value);
                  chkMonth.current = e.target.value;
                  setProductData({
                    ...productData,
                    totalPrice: Math.ceil(
                      (productData.info.price / chkMonth.current) *
                        productData.itemNum
                    ),
                    chkMonth: e.target.value,
                  });
                }}
                value={productData.chkMonth}
              >
                <option value="개월 선택" defaultValue hidden>
                  옵션 선택
                </option>
                <option value={12}>12개월</option>
                <option value={24}>24개월</option>
                <option value={36}>36개월</option>
              </FormSelect>
              <Div2>
                <Div1>
                  <Button1
                    onClick={(e) => {
                      // e.preventDefault();
                      if (itemNum.current > 1) {
                        itemNum.current -= 1;
                      }
                      setProductData({
                        ...productData,
                        totalPrice: Math.ceil(
                          (productData.info.price / productData.chkMonth) *
                            itemNum.current
                        ),
                        itemNum: itemNum.current,
                      });
                    }}
                  >
                    {" "}
                    -{" "}
                  </Button1>
                  <Input1 type="number" value={productData.itemNum} readOnly />
                  <Button1
                    onClick={(e) => {
                      // e.preventDefault();
                      itemNum.current += 1;
                      setProductData({
                        ...productData,
                        totalPrice: Math.ceil(
                          (productData.info.price / productData.chkMonth) *
                            itemNum.current
                        ),
                        itemNum: itemNum.current,
                      });
                    }}
                  >
                    {" "}
                    +{" "}
                  </Button1>
                </Div1>
                <span>
                  수량 :{" "}
                  <strong style={{ color: "#4646e2" }}>
                    {productData.itemNum}
                  </strong>{" "}
                  개
                </span>
              </Div2>
              <hr />
              <Div2>
                <strong>최종 구독가:</strong>
                <strong style={{ fontSize: "1.2rem" }}>
                  월 {productData.totalPrice.toLocaleString("ko-KR")} 원
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
              <ButtonJB onClick={handleSubmit} bg_color="#0C0F67">
                장바구니 담기
              </ButtonJB>
              <ButtonJB href="/cart" bg_color="#7E80AB">
                바로구매
              </ButtonJB>
            </Col>
          </Row>
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
