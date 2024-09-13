import React from "react";
import Carousel from "react-bootstrap/Carousel";

const PhotoList = [
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/MainCarousel/1.png?raw=true",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/MainCarousel/2.png?raw=true",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/MainCarousel/3.png?raw=true",
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
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default MainPageCarousel;
