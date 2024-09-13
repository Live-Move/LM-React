import React from "react";
import { Container, Img, Li, Span, Ul } from "./MainPageListCss";

const PhotoList = [
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/1.png?raw=true",
    path: "/",
    category: "테이블",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/2.png?raw=true",
    path: "/",
    category: "의자",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/3.png?raw=true",
    path: "/",
    category: "소파",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/4.png?raw=true",
    path: "/",
    category: "옷장",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/5.png?raw=true",
    path: "/",
    category: "인테리어 소품",
  },
];

function MainPageList(props) {
  function changeTheImg(event) {
    console.log("가가각");
  }
  return (
    <Container>
      <Ul>
        {PhotoList.map(({ src, path, category }, index) => {
          return (
            <Li key={src + index}>
              <a href={path}>
                <Img src={src} alt={category} onMouseOver={changeTheImg} />
                <Span>{category}</Span>
              </a>
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
}

export default MainPageList;
