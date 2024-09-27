import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BodyContainer,
  Button1,
  ColCard,
  Div01,
  Div02,
  Div1,
  Div2,
  Input1,
  MainContainer,
  MyInfoCol,
  MyInfoContainer,
  TopCol,
  TopContainer,
} from "./MyPageMainCss";
import { Col, Image, Row } from "react-bootstrap";

function MyPageMain(props) {
  const User = {
    user_id: "1",
    login_id: "test@gmail.com",
    password: "test",
    name: "admin", // 사용자의 이름
    address: "test-address",
    phone: "0000",
    birth: "1999-11-17",
  };

  const arrChoice = [
    {
      id: 1,
      src: "https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1315067_pe940386_s5.jpg?f=m",
      name: "가구1",
      content: "의자1",
      price: 60000,
      path: "/",
    },
    {
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73qr3k_i1LIenLXL9iAogEQSP-L_YRljZug&s",
      name: "가구2",
      content: "의자2",
      price: 50000,
      path: "/",
    },
    {
      id: 3,
      src: "https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1315067_pe940386_s5.jpg?f=m",
      name: "가구3",
      content: "의자3",
      price: 40000,
      path: "/",
    },
    {
      id: 4,
      src: "https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1315067_pe940386_s5.jpg?f=m",
      name: "가구4",
      content: "의자4",
      price: 40000,
      path: "/",
    },
    {
      id: 5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73qr3k_i1LIenLXL9iAogEQSP-L_YRljZug&s",
      name: "가구5",
      content: "의자5",
      price: 40000,
      path: "/",
    },
  ];

  const [choice, setChoice] = useState(arrChoice);
  const [itemNum, setItemNum] = useState(choice.map(() => 1)); // 제품 수량

  //총 구독상품 금액
  const totalGD = itemNum.reduce((total, currentNum, index) => {
    return total + currentNum * choice[index].price;
  }, 0);

  //스크롤
  const [barPosition, setBarPosition] = useState(5);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    console.log("Current Scroll Y:", currentScrollY);
    const position = 956  < 5 + window.scrollY ? 956  : 5 + window.scrollY;
    console.log("Bar Position:", position);
    setBarPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MainContainer style={{ color: "#111111" }}>
        <Row>
          <Col md={8}>
            <TopCol>
              <div>
                <h1 style={{ fontWeight: "bold" }}>
                  <span style={{ color: "#007CC1" }}>MyPage</span>Main
                </h1>
                <h6>
                  Live and Move를 방문해주셔서 감사합니다.
                  <br />이 곳에서 회원님의 모든정보를 한눈에 확인할 수 있습니다.
                </h6>
              </div>
            </TopCol>
            <BodyContainer>
              <h3>구독중인 상품</h3>
              <ColCard>
                {choice.map((item, index) => {
                  return (
                    <Div2 key={index}>
                      <Image src={item.src} style={{ width: "6em" }} />
                      <span>{item.name}</span>
                      <Div1>
                        <Input1 type="number" value={itemNum[index]} readOnly />
                      </Div1>
                      <span>
                        {(item.price * itemNum[index]).toLocaleString("ko-KR")}{" "}
                        원
                      </span>
                    </Div2>
                  );
                })}
              </ColCard>
            </BodyContainer>
          </Col>
          <MyInfoCol>
            <div className="side-bar" style={{ top: barPosition }}>
              {
                <MyInfoContainer>
                  <Div01>
                    <p>Live&Move 카드</p>
                  </Div01>
                  <div><h3 style={{color:"#fedd06"}}>{User.name}</h3><h3>님</h3></div>
                  구독료 : 월 {totalGD.toLocaleString("ko-KR")}원
                </MyInfoContainer>
              }
            </div>
          </MyInfoCol>
        </Row>
      </MainContainer>
    </>
  );
}

export default MyPageMain;
