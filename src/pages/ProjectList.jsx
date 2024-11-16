import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import palette from "../lib/colorPalette";
import Slick from "../components/Slick";
import Title from "../components/Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 270px);
  padding-top: 42px;
  margin-bottom: 30px;
  @media (hover: hover) and (pointer: fine) {
      height: unset;
    }
`;

// const Title = styled.div`
//   color: ${palette.color3};
//   text-align: center;
//   font-feature-settings: "liga" off, "clig" off;
//   font-family: "S-Core Dream";
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 200;
//   line-height: 22px;
//   margin-bottom: 17px;
// `;

// export const Line = styled.div`
//   width: 40px;
//   height: 1px;
//   background: ${palette.color3};
// `;

export const SlickBox = styled.div`
  margin-top: 30px;
  margin-bottom: 173px;
`;

function ProjectList({ projectId }) {
  const location = useLocation();
  const lastViewedId = projectId || 1;

  return (
    <Container>
      <Title title='Projects'/>
      <SlickBox>
        <Slick lastViewedId={lastViewedId}/>
      </SlickBox>
    </Container>
  );
}

export default ProjectList;
