import React from "react";
import styled from "styled-components";
import palette from "../lib/colorPalette";
import projectimg from "../img/team.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* 각 카드의 고정 너비 설정 */
  text-align: center;
  justify-content: center;
  transition: transform 0.3s, z-index 0.3s;
  opacity: ${(props) => (props.isCenter ? 1 : 0.4)}; /* 중앙 슬라이드와 양쪽 슬라이드 투명도 조절 */
  transform: ${(props) => (props.isCenter ? "scale(1)" : "scale(0.8)")}; /* 중앙 슬라이드 크기 조절 */
  z-index: ${(props) => (props.isCenter ? 10 : 5)}; /* 중앙 슬라이드 z-index 설정 */
`;

const Img = styled.img`
  width: 314px;
  height: 157px;
  flex-shrink: 0;
`;

const Text = styled.div`
  color: ${palette.white};
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: "S-Core Dream";
  font-style: normal;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-top: 16px;
`;

const Article = styled.div`
  font-size: 12px;
  font-weight: 200;
  margin-top: 10px;
`;

function SlickCard({ isCenter }) {
  return (
    <Container isCenter={isCenter}>
      <Img src={projectimg} alt="프로젝트이미지" />
      <Text>
        <Title>프로젝트 이름</Title>
        <Article>팀명</Article>
        <Article style={{ fontWeight: 100 }}>팀원 | 팀원 | 팀원 | 팀원 | 팀원</Article>
      </Text>
    </Container>
  );
}

export default SlickCard;
