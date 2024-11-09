import React from "react";
import styled from "styled-components";
import palette from "../lib/colorPalette";
import dswuLogo from "../img/logo_dswu.png";

export const Container = styled.div`
  width: 100vw;
  height: 148px;
  flex-shrink: 0;
  background: ${palette.footer};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (hover: hover) and (pointer: fine) {
    height: 224px;
  }
`;

const Invite = styled.div`
  & div {
    margin-bottom: 5px;
  }
  color: ${palette.white};
  font-feature-settings: "liga" off, "clig" off;
  font-family: "S-Core Dream";
  margin-left: 32px;
  padding-top: 24px;
  @media (hover: hover) and (pointer: fine) {
    margin: 45px 60px 0 60px;
    padding: 0;
  }
`;

const Default = styled.div`
  color: ${palette.white};
  font-feature-settings: "liga" off, "clig" off;
  font-family: "S-Core Dream";
  margin-left: 32px;
  padding-top: 24px;
  @media (hover: hover) and (pointer: fine) {
    margin: 45px 60px 0 60px;
    padding: 0;
  }
`;

const Title = styled.div`
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 275% */
  @media (hover: hover) and (pointer: fine) {
    font-size: 16px;
  }
`;

const Article = styled.div`
  font-size: 8px;
  font-style: normal;
  font-weight: 100;
  @media (hover: hover) and (pointer: fine) {
    font-size: 14px;
  }
`;

const Bottom = styled.div`
  display: flex;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 2%;
  justify-content: space-between;
  align-items: center;
  @media (hover: hover) and (pointer: fine) {
    margin: 0 60px 40px 60px;
    align-items: flex-end;
  }
`;

const Copyright = styled.div`
  color: ${palette.white};
  font-feature-settings: "liga" off, "clig" off;
  font-family: "S-Core Dream";
  font-size: 8px;
  font-style: normal;
  font-weight: 100;
  @media (hover: hover) and (pointer: fine) {
    font-size: 14px;
  }
`;

const Img = styled.img`
  width: 99px;
  height: 26px;
  flex-shrink: 0;
  @media (hover: hover) and (pointer: fine) {
    width: 296px;
    height: 78px;
    flex-shrink: 0;
  }
`;

const Row = styled.div`
  display: flex;
  margin-top: 5px;
`;

const Role = styled.div``;

const Name = styled.div`
  margin-left: 15px;
`;

const Text = styled.div`
  font-size: 8px;
  font-style: normal;
  font-weight: 100;
  line-height: 18px;
`;

function Footer({ type }) {
  return (
    <Container>
      {type === "invite" && (
        <Invite>
          <Title>2024 덕성여자대학교 IT미디어공학전공 제12회 졸업전시회</Title>
          <Article>Tel.02-901-8646</Article>
          <Article>[01369] 서울특별시 도봉구 삼양로 144길 33 덕성여자대학교 차미리사관 229호</Article>
        </Invite>
      )}
      {type === "default" && (
        <Default>
          <Title>2024 덕성여자대학교 IT미디어공학전공 제12회 졸업전시회 웹페이지</Title>
          <Row>
            <Role>
              <Text>Project-manager</Text>
              <Text>Front-end</Text>
              <Text>Back-end</Text>
            </Role>
            <Name>
              <Text>목소연</Text>
              <Text>김민지 김연우 안유빈</Text>
              <Text>백서진 조예령</Text>
            </Name>
          </Row>
        </Default>
      )}
      <Bottom>
        <Copyright>ⓒ 2024. IT Media Engineering all rights reserved.</Copyright>
        <Img src={dswuLogo} alt="덕성여자대학교" />
      </Bottom>
    </Container>
  );
}

export default Footer;
