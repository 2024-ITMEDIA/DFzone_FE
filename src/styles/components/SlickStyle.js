import styled from "styled-components";
import rightarrow from "../../img/icon_right.png";
import leftarrow from "../../img/icon_left.png";

export const NextTo = styled.div`
  background-image: url(${rightarrow});
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 20px;
`;

export const Prev = styled.div`
  background-image: url(${leftarrow});
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 20px;
`;

export const SliderContainer = styled.div`
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
  }

  .slick-center {
    opacity: 1; /* 중앙 슬라이드는 불투명 */
    transform: scale(1); /* 중앙 슬라이드는 크기 증가 */
    z-index: 1; /* 중앙 슬라이드는 최상위 z-index */
  }
`;
