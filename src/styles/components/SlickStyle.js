import styled from "styled-components";
import rightarrow from "../../img/icon_right.png";
import leftarrow from "../../img/icon_left.png";

export const NextTo = styled.div`
  height: 20px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 70px;
`;

export const Prev = styled.div`
  height: 20px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 70px;
`;

export const SliderContainer = styled.div`
  width: calc(100vw - 75px);
  @media (hover: hover) and (pointer: fine) {
    width: calc(100vw - 361px); 
  }
  margin: 0px auto;
  overflow: visible;

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  .slick-slide {
    opacity: 0.5;
    transition: opacity 0.3s ease;
    transform: scale(0.8); /* 기본 크기 */
    z-index: 1;
  }

  .slick-center {
    opacity: 1; /* 중앙 슬라이드는 불투명 */
    transform: scale(1); /* 중앙 슬라이드는 크기 증가 */
    z-index: 5; /* 중앙 슬라이드는 최상위 z-index */
  }
`;

export const Arrow1 = styled.img`
  height: 20px;
  width: 10px;
`;

export const Arrow2 = styled.img`
height: 20px;
width: 10px;
`;