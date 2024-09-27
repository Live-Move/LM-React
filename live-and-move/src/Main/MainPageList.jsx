import React from "react";
import { Container, Img, Li, Span, Ul } from "./MainPageListCss";
import { useNavigate } from "react-router-dom";

const PhotoList = [
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/1.png?raw=true",
    category1: "테이블",
    category2: "",
    value1: "50%",
    value2: "50%",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/2.png?raw=true",
    category1: "의자",
    category2: "",
    value1: "50%",
    value2: "50%",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/3.png?raw=true",
    category1: "침대",
    category2: "",
    value1: "50%",
    value2: "50%",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/4.png?raw=true",
    category1: "옷장",
    category2: "",
    value1: "50%",
    value2: "50%",
  },
  {
    src: "https://github.com/Live-Move/LM-Photos/blob/main/MainPage%20Image/SubPhoto/5.png?raw=true",
    category1: "인테리어",
    category2: "소품",
    value1: "40%",
    value2: "60%",
  },
];

function MainPageList(props) {
  // 애니메이션 테스트용 최종하기전 지워야함
  function changeTheImg(event) {
    console.log("가가각");
  }

  const navigate = useNavigate();

  function handleCategoryClick(category) {
    navigate("/list", { state: { category } }); // 경로와 함께 상태 전달
  }
  return (
    <Container>
      <Ul>
        {PhotoList.map((photo, index) => {
          return (
            <Li key={photo.src + index}>
              <button
                onClick={() => handleCategoryClick(photo.category1)} // category1 기반으로 이동
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }} // a 태그 스타일과 비슷하게 수정
              >
                <Img
                  src={photo.src}
                  alt={photo.category1}
                  onMouseOver={changeTheImg}
                  onMouseOut={changeTheImg}
                />
                {/* a에서 버튼으로 변경했으니 밑에 span 필요없을거같음 시간 나면 고치기*/}
                <Span sizevalue={photo.value1}>{photo.category1}</Span>
                <Span sizevalue={photo.value2}>{photo.category2}</Span>
              </button>
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
}

export default MainPageList;
