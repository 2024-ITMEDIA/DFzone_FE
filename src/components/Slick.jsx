import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickCard from "./SlickCard";
import * as S from "../styles/components/SlickStyle";
import left from "../img/icon_left.png";
import right from "../img/icon_right.png";

export default function CustomSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handleMediaChange = () => {
      setSlidesToShow(mediaQuery.matches ? 3 : 1);
    };

    handleMediaChange(); // 초기 설정
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // 미디어 쿼리 조건에 따라 slidesToShow 설정
    slidesToScroll: 1,
    centerMode: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    centerPadding: "5%",
    prevArrow: (
      <S.Prev>
        <S.Arrow1 src={left} alt='left'/>
      </S.Prev>
    ),
    nextArrow: (
      <S.NextTo>
        <S.Arrow2 src={right} alt='right'/>
      </S.NextTo>
    ),
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
