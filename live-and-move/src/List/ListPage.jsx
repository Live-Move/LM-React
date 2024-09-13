import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";


const Items = [
  {
      id : 1,
      src : "",
      name : "가구1",
      content : "의자1",
      price : 6000000
  },
  {
      id : 2,
      src : "",
      name : "가구2",
      content : "의자2",
      price : 5000000
  },
  {
      id : 3,
      src : "",
      name : "가구3",
      content : "의자3",
      price : 4000000
  },
  {
    id : 4,
    src : "",
    name : "가구4",
    content : "의자4",
    price : 4000000
},
{
  id : 5,
  src : "",
  name : "가구5",
  content : "의자5",
  price : 4000000
},
]
function ListPage(props) {




  return (
    <>
      <h1>list page</h1>

    <Container>
    <Row>
      {Items.map((item, index)=>(<Col key={index} sm={6} md={4} xxl={3} >
      <Card style={{marginBottom: '20px', background:'', }} >
        <Card.Img variant="top" src={item.src} alt={item.name}/>
        <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.content}</Card.Text>
        <Card.Text>{item.price}원</Card.Text>
      </Card.Body>
      </Card>
      </Col>))}
    </Row>
    </Container>
    </>
  );
}


export default ListPage;
