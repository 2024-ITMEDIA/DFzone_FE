import React from "react";
import styled from "styled-components";
import palette from "../lib/colorPalette";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
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
`;

export const Line = styled.div`
    width: 40px;
    height: 1px;
    background: ${palette.color3};
`;


function Title({ title }) {
    return (
        <>
            <Container>
                <Text>{title}</Text>
                <Line/>
            </Container>
        </>
    );
}

export default Title;
