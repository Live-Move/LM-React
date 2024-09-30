import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  ButtonInCart,
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
  const navigate = useNavigate();

  const deliveryCost = useRef(10000);
  const discountCost = useRef(0);

  const [cartData, setCartData] = useState({
    cartInfo: [],
    productInfo: [],
    itemNum: [],
  });

  const isLoadData = useRef(true);
  const URL = useRef("http://localhost:8080/api/cart");

  const fetchData = async () => {
    isLoadData.current = false;

    console.log("[ load cart data ]");
    const user_info = await isSessionExists();
    console.log(user_info);

    const response = await fetch(URL.current + "/list", {
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

    // 서버로 보낼 삭제 목록 추출
    const deleteTarget = cartData.cartInfo
      .filter((item) => checkItems.includes(item.cart_id))
      .map((item, index) => item.cart_id);

    console.log(`** deleteTarget : ${deleteTarget}`);
    fetchDeleteData(deleteTarget);

    setCheckItems([]);
    setCartData({
      ...cartData,
      cartInfo: updatedChoice,
      itemNum: updatedItemNum,
    });
  };

  // 개별 항목 삭제
  const handleDeleteItem = (index) => {
    const updatedChoice = cartData.cartInfo.filter((_, idx) => idx !== index);
    const updatedItemNum = cartData.itemNum.filter((_, idx) => idx !== index);
    const target = [cartData.cartInfo[index].cart_id];

    fetchDeleteData(target);

    setCartData({
      ...cartData,
      cartInfo: updatedChoice,
      itemNum: updatedItemNum,
    });
  };

  const fetchDeleteData = async (index) => {
    console.log("[ fetchDeleteData ]");
    const user_id = isSessionExists().user_id;
    const cart_id = index.reduce((total, current) => `${total}&${current}`);

    console.log(`** URL >> ${URL.current + `/delete/${user_id}/${cart_id}`}`);
    const response = await fetch(
      URL.current + `/delete/${user_id}/${cart_id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    console.log(`[ data ] >> ${data.code}`);
  };

  const billAreaList = [
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
  ];

  return (
    <>
      <Container style={{ fontFamily: "apple" }}>
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
                    <Div2 key={index + product_id}>
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
                      <span style={{ width: "290px", margin: "0px 15px" }}>
                        <p
                          style={{
                            fontSize: "19px",
                            fontWeight: "bold",
                            marginBottom: "0px",
                          }}
                        >
                          {cartData.productInfo[index].brand}
                        </p>
                        {cartData.productInfo[index].productName}
                      </span>
                      <Div1
                        style={{
                          width: "80px",
                          margin: "0px 8px",
                        }}
                      >
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
                          justifyContent: "end",
                          textAlign: "center",
                          width: "220px",
                          marginRight: "15px",
                        }}
                      >
                        {(
                          Math.ceil(cartData.productInfo[index].price / month) *
                          cartData.itemNum[index]
                        ).toLocaleString("ko-KR")}{" "}
                        원{" "}
                        <p style={{ marginLeft: "6px", fontWeight: "bold" }}>
                          [{cartData.cartInfo[index].month}개월]
                        </p>
                      </span>
                      <CloseButton onClick={() => handleDeleteItem(index)} />
                    </Div2>
                  );
                }
              )}
            </ColCard>
            <hr />
            <ButtonInCart
              width={"10em"}
              height={"3em"}
              variant="light"
              onClick={handleDeleteSelected}
            >
              선택상품삭제
            </ButtonInCart>
          </Col>
          <ColJM md={3} id="costAmount">
            <Container
              key="billArea"
              style={{ width: "370px", fontSize: "18px" }}
            >
              <h3 key="title" style={{ marginBottom: "20px" }}>
                주문 예상 금액
              </h3>
              {billAreaList.map(({ title, value }, index) => {
                return (
                  <>
                    <p
                      key={`${title}${index}`}
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
                    color: "#0a8abcc6",
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
              <ButtonInCart width={"100%"} height={"5em"} variant="light">
                <Div3 onClick={() => navigate("/paymentpage")}>
                  상품 주문하기
                  <Icon1 />
                </Div3>
              </ButtonInCart>
            </Container>
          </ColJM>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
