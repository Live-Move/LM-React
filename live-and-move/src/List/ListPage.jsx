import React, { useEffect, useState } from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import { StyleContainer } from "./CSS/ListCss";
import { NavLink } from "react-router-dom";

function ListPage(props) {
  const [items, setItems] = useState([]); 
  const url = "http://localhost:8080/api/products"; // API 주소

  
  const handleRenderTest = () => {
    fetch(url)
      .then((response) => {
        console.log(response); 
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          console.error("Expected an array but received:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error); 
      });
  };

useEffect(() => {
  handleRenderTest()
}, []); 

  return (
    <div style={{background:"#424242",paddingTop:"2em"}}>
    <Container >
      <Row style={{border: "1px solid #878787"}}>
        <h1 style={{color:"lightgray"}}>ggggg</h1>
      </Row>
    <Row>
      {items.map((item)=>(
        <Col key={item.product_id} sm={6} md={4} xxl={3} >
            <NavLink to={item.path} activeClassName="selected">
          <Card style={{marginTop:'2em', background:'', }} >
            <Card.Img variant="top" src={item.src} alt={item.naproduct_name}/>
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
