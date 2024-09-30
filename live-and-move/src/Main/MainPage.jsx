import React from "react";
import MainPageCarousel from "./MainPageCarousel";
import MainPageList from "./MainPageList";
import { CarouselContainer, Container } from "./MainPageCss";

function MainPage(props) {
  return (
    <Container>
      <CarouselContainer>
        <MainPageCarousel />
      </CarouselContainer>

      <CarouselContainer>
        <MainPageList style={{ backgroundColor: "#E6E3E1" }} />
      </CarouselContainer>
    </Container>
  );
}

export default MainPage;
