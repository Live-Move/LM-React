import React from "react";
import { AnimatedText, AnimatedText02, Button001, Div001, Div002, Img01, Img02, Light2 } from "./StartCSS";
import { Button, Overlay } from "react-bootstrap";
import { ImTruck } from "react-icons/im";

function Startpage(props) {
  

  
  return (
    <>
      <Div001>
        <Img02
          src="https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/logo_white.png?raw=true"
          alt="logo"
        ></Img02>
        <Img01 src="https://img.freepik.com/free-photo/3d-model-of-house-room_23-2150761134.jpg?size=626&ext=jpg&ga=GA1.1.237269809.1725974705&semt=ais_hybrid" />
        <Div002>
          <span className="animated-text">가구의 모든 것 </span><br />
          <span className="animated-text">live&move에서</span>
          <span className="animated-text"> 쉽고 간편하게</span>
        </Div002>
        <Button001 variant="secondary"href="/main">
          <span style={{ marginRight: "20px" }}>Pick Me Up ~</span> <ImTruck />
        </Button001>
      </Div001>
    </>
  );
}
export default Startpage;
