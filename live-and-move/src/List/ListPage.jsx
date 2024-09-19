import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import { StyleContainer } from "./CSS/ListCss";
import { NavLink } from "react-router-dom";


const Items = [
  {
      id : 1,
      src : "https://www.ikea.com/kr/ko/images/products/poaeng-low-back-armchair-natural-colour-beige-katorp-natural-colour-beige__1315067_pe940386_s5.jpg?f=m",
      name : "가구1",
      content : "의자1",
      price : 600000,
      path: "/listdetail",
  },
  {
      id : 2,
      src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73qr3k_i1LIenLXL9iAogEQSP-L_YRljZug&s",
      name : "가구2",
      content : "의자2",
      price : 500000,
      path: "/",
  },
  {
      id : 3,
      src : "",
      name : "가구3",
      content : "의자3",
      price : 400000,
      path: "/",
  },
  {
    id : 4,
    src : "",
    name : "가구4",
    content : "의자4",
    price : 400000,
    path: "/",
},
{
  id : 5,
  src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73qr3k_i1LIenLXL9iAogEQSP-L_YRljZug&s",
  name : "가구5",
  content : "의자5",
  price : 400000,
  path: "/",
},
]
function ListPage(props) {




  return (
    <div style={{background:"#424242",paddingTop:"2em"}}>
      <header>
      </header>
    <Container >
      <Row style={{border: "1px solid #878787"}}>
        <h1 style={{color:"lightgray"}}>ggggg</h1>
      </Row>
    <Row>
      {Items.map((item, index)=>(
        <Col key={index} sm={6} md={4} xxl={3} >
            <NavLink to={item.path} activeClassName="selected">
          <Card style={{marginTop:'2em', background:'', }} >
            <Card.Img variant="top" src={item.src} alt={item.name}/>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.content}</Card.Text>
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
