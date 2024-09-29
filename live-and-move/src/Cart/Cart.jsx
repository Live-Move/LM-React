import React, { useEffect, useRef, useState } from "react";
import {
  CloseButton,
  Col,
  Container,
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

function Cart(props) {
  const deliveryCost = useRef(10000);
  const discountCost = useRef(0);

  const [cartData, setCartData] = useState({
    cartInfo: [],
    productInfo: [],
    itemNum: [],
  });

  const isLoadData = useRef(true);
  const URL = useRef("http://localhost:8080/api/cart/list");

  const fetchData = async () => {
    isLoadData.current = false;

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

    console.log(`[ response ]`);
    const data = await response.json();
    console.log("[ cart data ]");
    console.log(data.data_cart);
    await setCartData({
      cartInfo: [...data.data_cart],
      productInfo: [...data.data_img],
      itemNum: [...data.data_cart.map(({ quantity }) => quantity)],
    });

    console.log("[ product data ]");
    console.log(data.data_img);
  };

  useEffect(() => {
    console.log("[ useEffect ]");
    if (isLoadData.current) {
      fetchData();
    }
  }, [isLoadData]);

  //개별 +,- 증가감소
  const handleUp = (index) => {
    const updateItemNum = [...cartData.itemNum];
    updateItemNum[index] = updateItemNum[index] + 1;
    setCartData({ ...cartData, itemNum: updateItemNum });
  };

  const handleDown = (index) => {
    const updateItemNum = [...cartData.itemNum];
    if (updateItemNum[index] > 1) {
      updateItemNum[index] = updateItemNum[index] - 1;
    }
    setCartData({ ...cartData, itemNum: updateItemNum });
  };
  //총 구독상품 금액
  const totalGD = cartData.itemNum.reduce((total, currentNum, index) => {
    return (
      total +
      currentNum *
        Math.ceil(
          cartData.productInfo[index].price / cartData.cartInfo[index].month
        )
    );
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
      cartData.cartInfo.forEach((el) => idArray.push(el.cart_id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };
  // 선택된 항목 삭제
  const handleDeleteSelected = () => {
    const updatedChoice = cartData.cartInfo.filter(
      (item) => !checkItems.includes(item.cart_id)
    );
    const updatedItemNum = cartData.itemNum.filter(
      (_, index) => !checkItems.includes(cartData.cartInfo[index].cart_id)
    );
    setCheckItems([]);
    setCartData({
      ...cartData,
      cartInfo: updatedChoice,
      itemNum: updatedItemNum,
    });
    // setChoice(updatedChoice);
  };

  // 개별 항목 삭제
  const handleDeleteItem = (index) => {
    const updatedChoice = cartData.cartInfo.filter((_, idx) => idx !== index);
    const updatedItemNum = cartData.itemNum.filter((_, idx) => idx !== index);
    setCartData({
      ...cartData,
      cartInfo: updatedChoice,
      itemNum: updatedItemNum,
    });
  };

  return (
    <>
      <Container>
        <h1 style={{ fontWeight: "bold", margin: "3rem" }}> 장바구니 </h1>
        <Row>
          <Col md={8}>
            <label style={{ display: "flex" }}>
              <FormCheck
                type="checkbox"
                label=""
                onChange={(e) => handleAllCheck(e.target.checked)}
                checked={
                  checkItems.length === cartData.cartInfo.length ? true : false
                }
              />
              전체선택
            </label>
            <hr />
            <strong style={{ fontSize: "1.2rem" }}>구독상품</strong>
            <ColCard>
              {cartData.cartInfo.map(
                ({ cart_id, month, product_id, quantity, user_id }, index) => {
                  return (
                    <Div2 key={index}>
                      <FormCheck
                        style={{
                          marginRight: "5px",
                        }}
                        type="checkbox"
                        id={`chB-${cart_id}`}
                        onChange={(e) =>
                          handleSingleCheck(e.target.checked, cart_id)
                        }
                        checked={checkItems.includes(cart_id) ? true : false}
                      />
                      <div
                        style={{
                          margin: "0 10px",
                          padding: "0px 20px",
                        }}
                      >
                        <Image
                          src={cartData.productInfo[index].thumbnail}
                          alt="now loading"
                          style={{ width: "6em" }}
                        />
                      </div>
                      <span style={{ width: "250px", margin: "0px 25px" }}>
                        {cartData.productInfo[index].productName}
                      </span>
                      <Div1 style={{ width: "150px", marginRight: "8px" }}>
                        <Button1 onClick={() => handleDown(index)}>-</Button1>
                        <Input1
                          type="number"
                          value={cartData.itemNum[index]}
                          readOnly
                        />
                        <Button1 onClick={() => handleUp(index)}>+</Button1>
                      </Div1>
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          width: "180px",
                        }}
                      >
                        {(
                          Math.ceil(cartData.productInfo[index].price / month) *
                          cartData.itemNum[index]
                        ).toLocaleString("ko-KR")}{" "}
                        원
                      </span>
                      <CloseButton onClick={() => handleDeleteItem(index)} />
                    </Div2>
                  );
                }
              )}
            </ColCard>
            <hr />
            <ButtonDel variant="light" onClick={handleDeleteSelected}>
              선택상품삭제
            </ButtonDel>
          </Col>
          <ColJM md={3}>
            <Container style={{ width: "370px", fontSize: "18px" }}>
              <h3 style={{ marginBottom: "20px" }}>주문 예상 금액</h3>
              {[
                {
                  title: "총 구독상품 금액",
                  value: totalGD,
                },
                {
                  title: "총 할인 금액",
                  value: discountCost.current,
                },
                {
                  title: "총 배송비",
                  value: deliveryCost.current,
                },
              ].map(({ title, value }, index) => {
                return (
                  <>
                    <p
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "330px",
                      }}
                    >
                      <p style={{ width: "170px", marginRight: "70px" }}>
                        {title}
                      </p>
                      <p
                        style={{
                          display: "flex",
                          width: "100px",
                          justifyContent: "end",
                        }}
                      >
                        {value.toLocaleString("ko-KR")} 원
                      </p>
                    </p>
                  </>
                );
              })}
              <hr />
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontWeight: "bold",
                  fontSize: "28px",
                }}
              >
                결제 금액:
                <p
                  style={{
                    margin: "0px 5px 0px 70px",
                    color: "lightskyblue",
                  }}
                >
                  {(
                    totalGD +
                    deliveryCost.current -
                    discountCost.current
                  ).toLocaleString("ko-KR")}
                </p>{" "}
                원
              </p>
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
