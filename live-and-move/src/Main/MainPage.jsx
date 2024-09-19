import React from "react";
import MainPageCarousel from "./MainPageCarousel";
import MainPageList from "./MainPageList";
import { CarouselContainer, Container } from "./MainPageCss";
import Header from "./Header";

function MainPage(props) {
  return (
    <Container>
      <Header />
      <CarouselContainer>
        <MainPageCarousel />
      </CarouselContainer>

      <CarouselContainer>
        <MainPageList />
      </CarouselContainer>
    </Container>
  );
}

export default MainPage;
