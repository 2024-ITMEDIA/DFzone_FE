import React from "react";
import styled from "styled-components";
import palette from "../lib/colorPalette";
import Slick from "../components/Slick";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: ${palette.color3};
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: "S-Core Dream";
  font-size: 20px;
  font-style: normal;
  font-weight: 200;
  line-height: 22px;
  margin-bottom: 17px;
`;

export const Line = styled.div`
  width: 40px;
  height: 1px;
  background: ${palette.color3};
`;

export const SlickBox = styled.div`
  margin-top: 30px;
  margin-bottom: 173px;
`;

function ProjectList() {
  return (
    <Container>
      <Title>Projects</Title>
      <Line />
      <SlickBox>
        <Slick />
      </SlickBox>
    </Container>
  );
}

export default ProjectList;
