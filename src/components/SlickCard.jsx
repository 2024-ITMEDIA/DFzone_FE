import React from "react";
import styled from "styled-components";
import palette from "../lib/colorPalette";

const Container = styled.div.attrs({
  isCenter: (props) => props.isCenter || undefined,
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  justify-content: center;
  transition: transform 0.3s, z-index 0.3s;
  opacity: ${(props) => (props.isCenter ? 1 : 1)};
  transform: ${(props) => (props.isCenter ? "scale(1)" : "scale(0.8)")};
  z-index: ${(props) => (props.isCenter ? 10 : 5)};
  @media (hover: hover) and (pointer: fine) {
    width: 628px;
    /* padding: 0 30px; */
  }
`;

const Img = styled.img`
  width: 314px;
  height: 157px;
  flex-shrink: 0;
  @media (hover: hover) and (pointer: fine) {
    width: 628px;
    height: 314px;
  }
`;

const Text = styled.div.attrs({
  isCenter: (props) => props.isCenter || undefined,
})`
  color: ${palette.white};
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: "S-Core Dream";
  font-style: normal;
  display: ${(props) => (props.isCenter ? "block" : "none")}; 
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-top: 16px;
  @media (hover: hover) and (pointer: fine) {
    font-size: 20px;
    margin-top: 60px;
  }
`;

const Article = styled.div`
  font-size: 12px;
  font-weight: 200;
  margin-top: 10px;
  @media (hover: hover) and (pointer: fine) {
    font-size: 16px;
    margin-top: 16px;
  }
`;

function SlickCard({ isCenter, project }) {
  return (
    <Container isCenter={isCenter}>
      <Img src={`${import.meta.env.VITE_API}${project.project_image}`} alt="프로젝트 이미지" />
      <Text isCenter={isCenter}>
        <Title>{project.project_name}</Title>
        <Article>{project.team_name}</Article>
        <Article style={{ fontWeight: 100 }}>
          {project.members.join(" | ")}
        </Article>
      </Text>
    </Container>
  );
}

export default SlickCard;
