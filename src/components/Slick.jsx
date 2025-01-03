import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickCard from "./SlickCard";
import * as S from "../styles/components/SlickStyle";
import left from "../img/icon_left.png";
import right from "../img/icon_right.png";

export default function CustomSlider({ type, lastViewedId }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [projects, setProjects] = useState([]);
  const [initialSlide, setInitialSlide] = useState(lastViewedId);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handleMediaChange = () => {
      setSlidesToShow(mediaQuery.matches ? 1 : 1);
    };

    handleMediaChange(); // 초기 설정
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}/api/projects/`);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjects();
  }, [lastViewedId]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    centerPadding: !type ? "5%" : "3%",
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
      <S.Text>*클릭 시 상세 페이지로 이동됩니다.</S.Text>
      <Slider {...settings} initialSlide={0}>
      {[
        ...projects.slice((initialSlide - 1) % projects.length),
        ...projects.slice(0, (initialSlide - 1) % projects.length),
      ].map((project, index) => (
        <SlickCard
          key={project.id}
          isCenter={index === currentSlide}
          project={project.team}
        />
      ))}
    </Slider>
    </S.SliderContainer>
  );
}
