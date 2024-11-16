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
    @media (hover: hover) and (pointer: fine) {
        width: 100%;
    }
`;

export const Container2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 46px;
    &.fade-on-scroll {
        transition: opacity 0.3s ease;
    }
    @media (hover: hover) and (pointer: fine) {
        margin-top: 100px;
    }
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
    line-height: 22px;
    &.fade-on-scroll {
        transition: opacity 0.3s ease;
    }
    @media (hover: hover) and (pointer: fine) {
        font-size: 20px;
        line-height: 32px;
    }
`;

export const Text2 = styled.div`
    color: var(--Backgrounds-Primary, #FFF);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 10px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px;
    &.fade-on-scroll {
        transition: opacity 0.3s ease;
    }
    @media (hover: hover) and (pointer: fine) {
        font-size: 14px;
        margin-top: 12px;
    }
`;

export const Img = styled.img`
    width: 29px;
    height: 29px;
    flex-shrink: 0;
    transition: opacity 0.3s ease;
    @media (hover: hover) and (pointer: fine) {
        width: 49px;
        height: 49px;
    }
`;

function AboutUs({type}) {
    return (
        <>
            <Container>
                <Text className="fade-on-scroll">IT미디어공학은 ‘IT’와 ‘미디어’라는</Text>
                <Text className="fade-on-scroll" style={{ marginBottom: !type ? "15px" : "40px" }}>용어가 결합된 융합 학문으로,</Text>
                <Text className="fade-on-scroll">소프트웨어 프로그래밍과 데이터 처리,</Text>
                <Text className="fade-on-scroll">영상과 게임 콘텐츠 제작, UI/UX 디자인 및</Text>
                <Text className="fade-on-scroll" style={{ marginBottom: !type ? "15px" : "40px" }}>인터랙션 기술 등을 다룹니다.</Text>
                <Text className="fade-on-scroll">컴퓨터 시스템의 하드웨어와 소프트웨어 기초 이론부터</Text>
                <Text className="fade-on-scroll">프로그래밍, 디지털 미디어 활용법까지 교육하여</Text>
                <Text className="fade-on-scroll" style={{ marginBottom: !type ? "15px" : "40px" }}>학생들이 다원적 융합형 인재로 성장할 수 있도록 합니다.</Text>
                <Text className="fade-on-scroll">이를 통해 졸업생들은 IT 및 미디어 디자인 분야에서</Text>
                <Text className="fade-on-scroll">전략적인 진로 기회를 확보하고,</Text>
                <Text className="fade-on-scroll">창의적 융합 사회에 기여할 수 있습니다.</Text>
                <Container2 className="fade-on-scroll">
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
