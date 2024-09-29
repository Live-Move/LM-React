import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BodyContainer,
  Card01,
  ColCard,
  Div01,
  Div02,
  Div1,
  Div3,
  Icon1,
  Image01,
  MainContainer,
  MyInfoCol,
  MyInfoContainer,
  TopCol,
} from "./MyPageMainCss";
import {
  Button,
  Card,
  Col,
  Image,
  Modal,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { isSessionExists } from "../Login/Account/AccountChk";

function MyPageMain(props) {
  ///////////////////
  // userInfo 상태 정의
  const [userInfo, setUserInfo] = useState(isSessionExists()); // 초기값은 빈 객체

  const [show, setShow] = useState(false); //택배가능지역
  //내정보
  const [show2, setShow2] = useState(false);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
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
                <Col>
                  <Div1 type="button" onClick={handleShow2}>
                    <h4>내 정보1</h4>
                    <Icon1 />
                  </Div1>
                </Col>
                <Col>
                  <Div1 type="button" onClick={() => setShow(true)}>
                    <h4>택배 가능지역 확인</h4>
                    <Icon1 />
                  </Div1>
                </Col>
                <Col>
                  <a
                    href="/main"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Div1>
                      <h4>이벤트 참여하기</h4>
                      <Icon1 />
                    </Div1>
                  </a>
                </Col>
              </Row>
            </BodyContainer>
            <BodyContainer>
              <h3 style={{ color: "#707070" }}>구독중인 상품</h3>
              <ColCard>
                {choice.map((item, index) => {
                  return (
                    <Card01 key={index}>
                      <Card.Body style={{ margin: "-0.5em" }}>
                        <span>
                          <h5>{item.name}</h5>
                        </span>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span>{itemNum[index]}개</span>
                          <span>
                            {(item.price * itemNum[index]).toLocaleString(
                              "ko-KR"
                            )}{" "}
                            원
                          </span>
                        </div>
                      </Card.Body>
                      <Image01 src={item.src} />
                      <Card.ImgOverlay></Card.ImgOverlay>
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
                    <span style={{ color: "#fedd06" }}>
                      {User.piont.toLocaleString("ko-KR")}{" "}
                    </span>
                    <span>점</span>
                  </Div02>
                </MyInfoContainer>
              }
            </div>
          </MyInfoCol>
        </Row>
      </MainContainer>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            배송가능지역
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            style={{ width: "90%", height: "auto", margin: "40px" }}
            src="https://cdn.crowdpic.net/detail-thumb/thumb_d_DBFE2FF99E92CD9611BBD55448660FF3.png"
          />
          <h5>* 서울전지역 당일 배송 가능 * </h5>
          <h5>* 전국 배송가능 지역 *</h5>
        </Modal.Body>
      </Modal>

      <Offcanvas
        show={show2}
        onHide={handleClose2}
        style={{ width: "35em", height: "auto" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Div3>
              <h3>내 정보 </h3>
            </Div3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <hr />
          <h4>아이디 : {userInfo.loginId}</h4>
          <hr />
          <h4>주소 : {userInfo.address}</h4>
          <hr />
          <h4>전화번호 : {userInfo.phone}</h4>
          <hr />
          <h4>생일 : {userInfo.birth}</h4>
          <hr />
          <Button variant="secondary">회원탈퇴</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyPageMain;
