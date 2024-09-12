import React from "react";
import Carousel from "react-bootstrap/Carousel";

const MainPagePhotoList = [
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/1.png?raw=true",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/2.png?raw=true",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/3.png?raw=true",
  },
];

function MainPageCarousel(props) {
  return (
    <Carousel>
      {MainPagePhotoList.map((photo, index) => (
        <Carousel.Item key={index}>
          <img
            src={photo.src}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", height: "825px", objectFit: "cover" }} // 이미지의 높이와 너비 설정
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MainPageCarousel;
