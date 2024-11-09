import React from "react";
import styled from "styled-components";
import palette from "../lib/colorPalette";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: ${palette.white};
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  text-shadow: 0px 0px 3px ${palette.shadow};
  font-family: "S-Core Dream";
  font-size: 18px;
  font-style: normal;
  font-weight: 200;
  line-height: 22px; /* 122.222% */
  margin-bottom: 24px;
`;

const Text = styled.div`
  color: ${palette.white};
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  text-shadow: 0px 0px 3px ${palette.shadow};
  font-family: "S-Core Dream";
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: 22px; /* 183.333% */
  &.fade-on-scroll {
        transition: opacity 0.3s ease;
    }
  @media (hover: hover) and (pointer: fine) {
    font-size: 20px;
    line-height: 32px;
  }
`;

// const Map = styled.div`
//   width: 296px;
//   height: 201px;
//   flex-shrink: 0;
//   margin: 10px 0px;
// `;

const Directions = styled.div`
  color: ${palette.white};
  font-feature-settings: "liga" off, "clig" off;
  font-family: "S-Core Dream";
  font-size: 11px;
  font-style: normal;
  font-weight: 200;
  line-height: 22px; /* 200% */
  width: 296px;
  display: flex;
  margin: 0 auto;
  &.fade-on-scroll {
        transition: opacity 0.3s ease;
    }
  @media (hover: hover) and (pointer: fine) {
    font-size: 20px;
    line-height: 32px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Traffic = styled.div`
  text-align: right;
`;

const Number = styled.div`
  margin-left: 9px;
  @media (hover: hover) and (pointer: fine) {
    margin-left: 12px;
  }
`;

const MapBox = ({type}) => {
  const handleMapClick = () => {
    const kakaoMapUrl = `https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,510590,1154375&rt1=&rt2=%EC%84%9C%EC%9A%B8%EC%B0%BD%EC%97%85%ED%97%88%EB%B8%8C%20%EC%B0%BD%EB%8F%99&rtIds=,1631941533`;
    window.open(kakaoMapUrl, "_blank"); // 새 창에서 길찾기 페이지 열기
  };

  return (
    <Container>
      <Address>
        <div className="fade-on-scroll">
          <Text>서울 도봉구 마들로13길 84</Text>
          <Text>서울창업허브 창동 B1</Text>
        </div>
        <Map
          className="fade-on-scroll"
          center={{ lat: 37.6553254, lng: 127.0480123 }}
          style={{
            width: !type? "296px" : "592px",
            height: !type? "201px" : "402px",
            margin: !type? "15px 0px" : "30px 0",
            flexShrink: "0",
          }}
          level={3}
          onClick={handleMapClick} // 클릭 이벤트 핸들러 추가
        >
          <MapMarker position={{ lat: 37.6553254, lng: 127.0480123 }} title="서울창업허브 창동"></MapMarker>
        </Map>
      </Address>
      <Directions className="fade-on-scroll">
        <Traffic>
          지하철 |<br /> 버스 |
        </Traffic>
        <Number>
          1호선, 4호선 창동역
          <br />
          1119, 1120, 1129, 1142
          <br />
          노원 05, 노원 08, 노원 15, 도봉08, 도봉09, 도봉01
        </Number>
      </Directions>
    </Container>
  );
};

export default MapBox;
