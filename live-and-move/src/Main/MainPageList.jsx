import React from "react";
import { Container, Img, Li, Span, Ul } from "./MainPageListCss";

const PhotoList = [
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/1.png?raw=true",
    path: "/",
    category1: "테이블",
    category2: "",
    value1: "50%",
    value2: "50%",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/2.png?raw=true",
    path: "/",
    category1: "의자",
    category2: "",
    value1: "50%",
    value2: "50%",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/3.png?raw=true",
    path: "/",
    category1: "소파",
    category2: "",
    value1: "50%",
    value2: "50%",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/4.png?raw=true",
    path: "/",
    category1: "옷장",
    category2: "",
    value1: "50%",
    value2: "50%",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/5.png?raw=true",
    path: "/",
    category1: "인테리어",
    category2: "소품",
    value1: "40%",
    value2: "60%",
  },
];

function MainPageList(props) {
  function changeTheImg(event) {
    console.log("가가각");
  }
  return (
    <Container>
      <Ul>
        {PhotoList.map((photo, index) => {
          return (
            <Li key={photo.src + index}>
              <a href={photo.path}>
                <Img
                  src={photo.src}
                  alt={photo.category1}
                  onMouseOver={changeTheImg}
                  onMouseOut={changeTheImg}
                />
                <Span sizevalue={photo.value1}>{photo.category1}</Span>
                <Span sizevalue={photo.value2}>{photo.category2}</Span>
              </a>
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
}

export default MainPageList;
