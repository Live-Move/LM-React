import React, { useEffect, useState } from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import { StyleContainer } from "./CSS/ListCss";
import { NavLink } from "react-router-dom";

function ListPage(props) {
  const [items, setItems] = useState([]); // 제품 목록을 저장할 상태
  const url = "http://localhost:8080/api/products"; // API 주소

  // Spring Boot API로부터 데이터를 fetch로 가져오는 함수
  const handleRenderTest = () => {
    fetch(url)
      .then((response) => {
        console.log(response);
        // return response.json();
      })
      // .then((data) => {
      // console.log(data)
      // });
    }

  // const fetchItems = async () => {
  //   try {
  //     const response = await fetch(url); // API 호출
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok"); // 네트워크 오류 처리
  //     }
  //     const data = await response.json(); // JSON 데이터를 JavaScript 객체로 변환
  //     console.log(data); // 데이터 확인
  //     setItems(data); // 받아온 데이터를 상태에 저장
  //   } catch (error) {
  //     console.error("Error fetching product data:", error); // 에러 처리
  //   }
  // };

useEffect(() => {
  handleRenderTest() // 컴포넌트가 마운트될 때 데이터를 가져옴
}, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행


  return (
    <div style={{background:"#424242",paddingTop:"2em"}}>
      <header>
      </header>
    <Container >
      <Row style={{border: "1px solid #878787"}}>
        <h1 style={{color:"lightgray"}}>ggggg</h1>
      </Row>
    <Row>
      {items.map((item)=>(
        <Col key={item.product_id} sm={6} md={4} xxl={3} >
            <NavLink to={item.path} activeClassName="selected">
          <Card style={{marginTop:'2em', background:'', }} >
            <Card.Img variant="top" src={item.src} alt={item.name}/>
          <Card.Body>
            <Card.Title>{item.product_name}</Card.Title>
            <Card.Text>{item.category}</Card.Text>
            <Card.Text>{item.brand}</Card.Text>
            <Card.Text>{item.price.toLocaleString("ko-KR")} 원</Card.Text>
          </Card.Body>
        </Card>
            </NavLink>
      </Col>))}
    </Row>
    </Container>
    </div>
  );
}


export default ListPage;
