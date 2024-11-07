import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickCard from "./SlickCard";
import * as S from "../styles/components/SlickStyle";

export default function CustomSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 한 번에 3개의 슬라이드를 표시
    slidesToScroll: 1,
    centerMode: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    centerPadding: "5%",
    prevArrow: <S.Prev />,
    nextArrow: <S.NextTo />,
  };

  return (
    <S.SliderContainer>
      <Slider {...settings}>
        <SlickCard isCenter={currentSlide === 0} />
        <SlickCard isCenter={currentSlide === 1} />
        <SlickCard isCenter={currentSlide === 2} />
        <SlickCard isCenter={currentSlide === 3} />
        <SlickCard isCenter={currentSlide === 4} />
        <SlickCard isCenter={currentSlide === 5} />
        <SlickCard isCenter={currentSlide === 6} />
        <SlickCard isCenter={currentSlide === 7} />
      </Slider>
    </S.SliderContainer>
  );
}
