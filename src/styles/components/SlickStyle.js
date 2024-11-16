import styled from "styled-components";
import palette from "../..//lib/colorPalette";
import rightarrow from "../../img/icon_right.png";
import leftarrow from "../../img/icon_left.png";

export const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: ${palette.white};
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: "S-Core Dream";
  font-size: 10px;
  font-style: normal;
  font-weight: 200;
  line-height: 22px;
  @media (hover: hover) and (pointer: fine) {
    font-size: 12px;
    line-height: 32px;
  }
`;

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
  min-height: 290px;
  margin: 0px auto;
  @media (hover: hover) and (pointer: fine) {
    width: 668px; 
    min-height: 600px;
    /* padding-right: 3%; */
  }
  overflow: visible;

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  .slick-slide {
    opacity: 1;
    transition: opacity 0.3s ease;
    transform: scale(0.8); /* 기본 크기 */
    z-index: 1;
  }

  .slick-center {
    opacity: 1; /* 중앙 슬라이드는 불투명 */
    transform: scale(1); /* 중앙 슬라이드는 크기 증가 */
    position: relative;
    z-index: 5; /* 중앙 슬라이드는 최상위 z-index */
  }
`;

export const Arrow1 = styled.img`
  height: 20px;
  width: 10px;
  @media (hover: hover) and (pointer: fine) {
    width: 20px;
    height: 40px;
  }
`;

export const Arrow2 = styled.img`
  height: 20px;
  width: 10px;
  @media (hover: hover) and (pointer: fine) {
    width: 20px;
    height: 40px;
  }
`;