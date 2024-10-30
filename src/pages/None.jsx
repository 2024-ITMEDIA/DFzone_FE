import React from "react";
import styled from "styled-components";
import palette from "../lib/colorPalette";
import none from "../img/none.png";

export const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 80px);
    @media (hover: hover) and (pointer: fine) {
        height: 100vh;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NoneImg = styled.img`
    width: 45%;
    @media (hover: hover) and (pointer: fine) {
        width: 25%;
    }
`;

export const Title = styled.div`
    color: ${palette.white};
    text-align: center;
    text-shadow: 0px 0px 3px #583687;
    font-family: "S-Core Dream";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
    margin-top: 11px;
    margin-bottom: 6px;
    @media (hover: hover) and (pointer: fine) {
        font-size: 47px;
    }
`;

export const Content = styled.div`
    color: ${palette.color3};
    text-align: center;
    font-family: "S-Core Dream";
    font-size: 13px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    letter-spacing: -0.39px;
    @media (hover: hover) and (pointer: fine) {
        font-size: 22px;
    }
`;

function None() {
    return (
        <>
            <Container>
                <NoneImg src={none} alt='404'/>
                <Title>찾을 수 없는 페이지입니다.</Title>
                <Content>요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요.</Content>
            </Container>
        </>
    );
}

export default None;
