import React, { useState, useEffect, useRef } from "react";
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
  line-height: 22px;
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
  line-height: 22px;
  &.fade-on-scroll {
    transition: opacity 0.3s ease;
  }
  @media (hover: hover) and (pointer: fine) {
    font-size: 20px;
    line-height: 32px;
  }
`;

const Directions = styled.div`
  color: ${palette.white};
  font-feature-settings: "liga" off, "clig" off;
  font-family: "S-Core Dream";
  font-size: 11px;
  font-style: normal;
  font-weight: 200;
  line-height: 22px;
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

const MapBox = ({ type }) => {
  const [isVisible, setIsVisible] = useState(false);
  const mapBoxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 요소가 뷰포트에 들어오면 isVisible을 true로 설정
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 한 번만 트리거되도록 observer 해제
        }
      },
      { threshold: 0.5 } // 50% 이상 화면에 보일 때 트리거
    );

    if (mapBoxRef.current) {
      observer.observe(mapBoxRef.current);
    }

    return () => {
      if (mapBoxRef.current) {
        observer.unobserve(mapBoxRef.current); // 컴포넌트가 언마운트되면 observer 해제
      }
    };
  }, []);

  const mapCenter = { lat: 37.6553254, lng: 127.0480123 };

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
        <div 
          ref={mapBoxRef}
          style={{
            display: "flex", 
            justifyContent: "center", 
            flexDirection: 'column', 
            alignItems: 'flex-end', 
            marginBottom: "15px" 
          }}
          className={`fade-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <Map
            center={mapCenter}
            style={{
              width: !type ? "296px" : "592px",
              height: !type ? "201px" : "402px",
              margin: !type ? "15px 0 0 0" : "30px 0 0 0",
              flexShrink: "0",
            }}
            level={!type ? 4 : 2}
            onClick={handleMapClick}
          >
            <MapMarker position={mapCenter} title="서울창업허브 창동"></MapMarker>
          </Map>
          <Text style={{fontSize: !type ? "10px" : "14px", color: `${palette.white}` }}>*지도를 클릭하면 길찾기로 연결됩니다.</Text>
        </div>
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
