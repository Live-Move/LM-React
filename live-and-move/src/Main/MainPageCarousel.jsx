import React from "react";
import Carousel from "react-bootstrap/Carousel";

const PhotoList = [
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/MainCarousel/1.png?raw=true",
    title: "리브앤무브",
    content: "합리적인 가격으로 만나는 프리미엄 가구",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/MainCarousel/2.png?raw=true",
    title: "리브앤 무브2",
    content: "리브앤 무브2",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/MainCarousel/3.png?raw=true",
    title: "리브앤 무브3",
    content: "리브앤 무브3",
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
            style={{ width: "100%", height: "700px", objectFit: "cover" }} // 이미지의 높이와 너비 설정
          />

          <Carousel.Caption>
            <div>
              <h3>{photo.title}</h3>
              <p>{photo.content}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default MainPageCarousel;
