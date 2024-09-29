import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BodyContainer,
  Card01,
  ColCard,
  Div01,
  Div02,
  Div1,
  Icon1,
  Image01,
  MainContainer,
  MyInfoCol,
  MyInfoContainer,
  TopCol,
} from "./MyPageMainCss";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MyPageMain(props) {
  const [userData, setUserData] = useState(null);
  const [userId, setUserId] = useState("");



///////////////////
  const params = useParams();
  const user_id = params.user_id;
  console.log(`[ user_id ] >> ${user_id}`);

  const URL_user = `http://localhost:8080/api/mypage/user?user_id=${user_id}`;

  // userInfo 상태 정의
  const [userInfo, setUserInfo] = useState({}); // 초기값은 빈 객체


  useEffect(() => {
    // let userInfo = {};

    fetch(URL_user)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data.code);
        // userInfo = { ...data.data };
        setUserInfo(data.data);
        console.log(userInfo);
      });
  }, []);

//////////////////////

  const User = {
    user_id: "1",
    login_id: "test@gmail.com",
    password: "test",
    name: "admin", // 사용자의 이름
    address: "test-address",
    phone: "0000",
    birth: "1999-11-17",
    piont: "10000",
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
  const [barPosition, setBarPosition] = useState();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    console.log("Current Scroll Y:", currentScrollY);
    const position = window.scrollY;
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
          <Col md={9}>
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
      <Row>
        <Col ><Div1><h4>내 정보1</h4><Icon1/></Div1></Col>
        <Col ><Div1><h4>택배 가능지역 확인</h4><Icon1/></Div1></Col>
        <Col ><Div1><h4>내 정보3</h4><Icon1/></Div1></Col>
      </Row>
    </BodyContainer>
            <BodyContainer>
              <h3 style={{ color: "#707070" }}>구독중인 상품</h3>
              <ColCard>
                {choice.map((item, index) => {
                  return (
                    <Card01 key={index}>
                      <Card.Body style={{margin:"-0.5em"}}>
                        <span><h5>{item.name}</h5></span>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>{itemNum[index]}개</span>
                        <span>{(item.price * itemNum[index]).toLocaleString("ko-KR")} 원</span>
                        </div>
                      </Card.Body>
                      <Image01 src={item.src}/>
                      <Card.ImgOverlay>
                      </Card.ImgOverlay>
                    </Card01>
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
                  <div>
                    <strong style={{ color: "#fedd06", fontSize: "2em" }}>
                      {userInfo.name}
                    </strong>
                    <span style={{ fontSize: "2em" }}>님</span>
                  </div>
                  <span>구독료 : 월 {totalGD.toLocaleString("ko-KR")} 원</span>
                  <Div02>
                    <div>아이디 : {userInfo.loginId}</div>
                    <span>포인트 : </span>
                    <span style={{ color: "#fedd06"}}>{User.piont.toLocaleString("ko-KR")} </span> 
                    <span>점</span>
                  </Div02>
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
