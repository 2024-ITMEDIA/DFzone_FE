import React from "react";
import styled from "styled-components";
import palette from "../lib/colorPalette";
import Home from '../img/icon_home.png';
import Insta from '../img/icon_instagram.png';

export const Container = styled.div`
    width: 316px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    box-sizing: border-box;
`;

export const Container2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 39px;
`;

export const Group = styled.a`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`;

export const Text = styled.div`
    color: var(--Backgrounds-Primary, #FFF);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px; /* 183.333% */
`;

export const Text2 = styled.text`
    color: var(--Backgrounds-Primary, #FFF);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 10px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px; /* 220% */
`;

export const Img = styled.img `
    width: 29px;
    height: 29px;
    flex-shrink: 0;
`;

function AboutUs() {
    return (
        <>
            <Container>
                <Text>
                IT미디어공학전공은 컴퓨터, 스마트폰 및 다양한 사물인터넷
                기기를 위한 프로그래밍 및 데이터의 처리, 활용 등을 위한
                첨단 기술 분야를 다룹니다. 또한 영상, 게임 콘텐츠, 사용자
                인터페이스/사용자 경험 등 창조적인 미디어 기술 분야를
                다룸으로써, 첨단 IT 및 미디어 기술에 대한 전반적 이해를
                토대로 다원적 융합형 인재 양성을 통해 새로운 융합 사회로의
                진보와 인류 사회의 발전에 기여함을 목표로 하고 있습니다.
                </Text>
                <Container2>
                    <Group href="https://www.duksung.ac.kr/itmedia/main.do">
                        <Img src={Home} alt="Home Icon Image" />
                        <Text2>학과 홈페이지</Text2>
                    </Group>
                    <Group href="https://www.instagram.com/dswu_itmedia/">
                        <Img src={Insta} alt="Instagram Icon Image" />
                        <Text2>공식 인스타그램</Text2>
                    </Group>
                    <Group href="https://www.instagram.com/dswu_itmedia_24/">
                        <Img src={Insta} alt="Instagram Icon Image" />
                        <Text2>전시회 인스타그램</Text2>
                    </Group>
                </Container2>
            </Container>

        </>
    );
}

export default AboutUs;
