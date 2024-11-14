import React from "react";
import styled from "styled-components";
import palette from "../lib/colorPalette";

export const Container = styled.div`
    width: calc(100vw - 84px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 24px;
    &.fade-on-scroll {
        transition: opacity 0.3s ease;
    }
    @media (hover: hover) and (pointer: fine) {
        width: unset;
        margin-bottom: 38px;
    }
`;

export const Text = styled.div`
    color: ${palette.color3};
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 20px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px;
    margin-bottom: 17px;
    @media (hover: hover) and (pointer: fine) {
        font-size: 48px;
        line-height: 50px;
        margin-bottom: 24px;
    }
`;

export const Line = styled.div`
    width: 40px;
    height: 1px;
    background: ${palette.color3};
    @media (hover: hover) and (pointer: fine) {
        width: 80px;
    }
`;


function Title({ title }) {
    return (
        <>
            <Container className="fade-on-scroll">
                <Text>{title}</Text>
                <Line/>
            </Container>
        </>
    );
}

export default Title;
