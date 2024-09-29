import React, { useEffect, useRef, useState } from "react";
import {
  CloseButton,
  Col,
  Container,
  Form,
  FormCheck,
  Image,
  Row,
} from "react-bootstrap";
import {
  Button1,
  ButtonDel,
  ButtonJM,
  ColCard,
  ColJM,
  Div1,
  Div2,
  Div3,
  Icon1,
  Input1,
} from "./CSS/Cart";
import { isSessionExists } from "../Login/Account/AccountChk";

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

function Cart(props) {
  const [choice, setChoice] = useState(arrChoice);
  const [itemNum, setItemNum] = useState(choice.map(() => 1)); // 제품 수량
  const isLoadData = useRef(true);
  const URL = useRef("http://localhost:8080/api/cart/list");

  const fetchData = async () => {
    console.log("[ load cart data ]");
    const user_info = await isSessionExists();
    console.log(user_info);

    const response = await fetch(URL.current, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_info),
    });

    console.log(`[ response ] >> ${response}`);
    // const data = response.json();
    // console.log(data);

    isLoadData.current = false;
  };

  useEffect(() => {
    console.log("[ effect ]");
    if (isLoadData.current) {
      fetchData();
    }
  }, [isLoadData]);

  //개별 +,- 증가감소
  const handleUp = (index) => {
    const updateItemNum = [...itemNum];
    updateItemNum[index] = updateItemNum[index] + 1;
    setItemNum(updateItemNum);
  };

  const handleDown = (index) => {
    const updateItemNum = [...itemNum];
    if (updateItemNum[index] > 1) {
      updateItemNum[index] = updateItemNum[index] - 1;
    }
    setItemNum(updateItemNum);
  };
  //총 구독상품 금액
  const totalGD = itemNum.reduce((total, currentNum, index) => {
    return total + currentNum * choice[index].price;
  }, 0);

  // 체크박스 선택
  const [checkItems, setCheckItems] = useState([]);
  // 개별선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };
  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      choice.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };
  // 선택된 항목 삭제
  const handleDeleteSelected = () => {
    const updatedChoice = choice.filter(
      (item) => !checkItems.includes(item.id)
    );
    const updatedItemNum = itemNum.filter(
      (_, index) => !checkItems.includes(choice[index].id)
    );
    setCheckItems([]);
    setItemNum(updatedItemNum);
    setChoice(updatedChoice);
  };

  // 개별 항목 삭제
  const handleDeleteItem = (index) => {
    const updatedChoice = choice.filter((_, idx) => idx !== index);
    const updatedItemNum = itemNum.filter((_, idx) => idx !== index);
    setChoice(updatedChoice);
    setItemNum(updatedItemNum);
  };

  return (
    <>
      <Container>
        <h2 style={{ margin: "3rem" }}> 장바구니 </h2>
        <Row>
          <Col md={7}>
            <label style={{ display: "flex" }}>
              <FormCheck
                type="checkbox"
                label=""
                onChange={(e) => handleAllCheck(e.target.checked)}
                checked={checkItems.length === choice.length ? true : false}
              />
              전체선택
            </label>
            <hr />
            <strong style={{ fontSize: "1.2rem" }}>구독상품</strong>
            <ColCard>
              {choice.map((item, index) => {
                return (
                  <Div2 key={index}>
                    <FormCheck
                      type="checkbox"
                      id={`chB-${item.id}`}
                      onChange={(e) =>
                        handleSingleCheck(e.target.checked, item.id)
                      }
                      checked={checkItems.includes(item.id) ? true : false}
                    />
                    <label
                      htmlFor={`chB-${item.id}`}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image src={item.src} style={{ width: "6em" }} />
                    </label>
                    <span>{item.name}</span>
                    <Div1>
                      <Button1 onClick={() => handleDown(index)}>-</Button1>
                      <Input1 type="number" value={itemNum[index]} readOnly />
                      <Button1 onClick={() => handleUp(index)}>+</Button1>
                    </Div1>
                    <span>
                      {(item.price * itemNum[index]).toLocaleString("ko-KR")} 원
                    </span>
                    <CloseButton onClick={() => handleDeleteItem(index)} />
                  </Div2>
                );
              })}
            </ColCard>
            <hr />
            <ButtonDel variant="light" onClick={handleDeleteSelected}>
              선택상품삭제
            </ButtonDel>
          </Col>
          <ColJM md={4}>
            <Container>
              <h3>주문 예상 금액</h3>
              <p>총 구독상품 금액 {totalGD} 원</p>
              <p>총 할인 금액 {} 원</p>
              <p>총 배송비 {} 원</p>
              <hr />
              <p>결제 금액: {totalGD.toLocaleString("ko-KR")} 원</p>
              <ButtonJM variant="light">
                <Div3>
                  상품 주문하기
                  <Icon1 />
                </Div3>
              </ButtonJM>
            </Container>
          </ColJM>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
