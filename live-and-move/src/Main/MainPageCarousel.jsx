import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  CaptionContainer,
  H1,
  Span,
  TextContainer,
} from "./MainPageCarouselCss";

const PhotoList = [
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/MainCarousel/1.png?raw=true",
    title: "리브앤무브",
    content: "합리적인 가격으로 만나는 프리미엄 가구",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/MainCarousel/2.png?raw=true",
    title: "대여 서비스",
    content:
      "이제는 누구나 고급스러운 가구를 가격 부담 없이. 합리적인 선택으로 당신의 집을 완성하세요.",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/MainCarousel/3.png?raw=true",
    title: "가을, 따뜻한 공간을 위한 프리미엄 가구",
    content:
      "쌀쌀해지는 계절, 따뜻한 분위기를 더해줄 웜톤 가구로 집 안을 포근하게 꾸며보세요. 가을에 어울리는 프리미엄 가구를 합리적인 가격으로 만나보세요.",
  },
];

function MainPageCarousel(props) {
  return (
    <Carousel>
      {PhotoList.map((photo, index) => (
        <Carousel.Item key={index}>
          <img
            src={photo.src}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              minWidth: "1900px",
              height: "700px",
              objectFit: "cover",
            }}
          />
          <div style={{ position: "relative" }}>
            <CaptionContainer>
              <TextContainer>
                <H1>{photo.title}</H1>
                <Span>{photo.content}</Span>
              </TextContainer>
            </CaptionContainer>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default MainPageCarousel;
