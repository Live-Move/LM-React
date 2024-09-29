import React from "react";
import { Button001, Div001, Div002, Img01 } from "./StartCSS";
import { Button, Overlay } from "react-bootstrap";
import { ImTruck } from "react-icons/im";
function Startpage(props) {
  return (
    <>
    <Div001>      
      <Img01 src="https://img.freepik.com/free-photo/3d-model-of-house-room_23-2150761134.jpg?size=626&ext=jpg&ga=GA1.1.237269809.1725974705&semt=ais_hybrid" />
      <Div002>가구의 모든 것<br />live&move에서 쉽고 간편하게 </Div002>      
    <Button001 href="/main"> MainPage  <ImTruck /></Button001>
    </Div001>
    </>
  );
}
export default Startpage;
