import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

function ListPage(props) {
  const location = useLocation();
  const category = location.state?.category || "기본 카테고리"; // 상태로 넘어온 카테고리
  const [items, setItems] = useState([]);

  useEffect(() => {
    // API 요청 (예시)
    const fetchItems = async () => {
      console.log("Fetching items for category:", category); // 카테고리 로그 확인
      const response = await fetch(
        `http://localhost:8080/api/product/list?category=${category}`
      );
      const data = await response.json(); // json형식으로 변환해서 저장
      console.log("Fetched items:", data); // 가져온 데이터 로그 확인
      setItems(data);
    };
    fetchItems();
  }, [category]);

  return (
    <div style={{ background: "#424242", paddingTop: "2em" }}>
      <Container>
        <Row style={{ border: "1px solid #878787" }}>
          <h1 style={{ color: "lightgray" }}>광고배너</h1>
        </Row>
        <Row>
          {items.map((item) => (
            <Col key={item.product_id} sm={6} md={4} xxl={3}>
              <NavLink to={item.path}>
                <Card style={{ marginTop: "2em", background: "" }}>
                  <Card.Img
                    variant="top"
                    src={item.thumbnail}
                    alt={item.name}
                  />
                  <Card.Body>
                    <Card.Title>{item.product_name}</Card.Title>
                    <Card.Text>{item.category}</Card.Text>
                    <Card.Text>{item.brand}</Card.Text>
                    <Card.Text>
                      {item.price.toLocaleString("ko-KR")} 원
                    </Card.Text>
                  </Card.Body>
                </Card>
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ListPage;
