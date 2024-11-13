import styled from "styled-components";
import palette from "../lib/colorPalette";

export const Guest = styled.div``;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    @media (hover: hover) and (pointer: fine) {
        margin-bottom: 100px;
    }
`;

export const GuestContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    width: 100%;
    margin-top: 42px;
    color: var(--Color3, #6A226D);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 110% */
`;

export const Line = styled.div`
    width: 40px;
    height: 1.5px;
    background: var(--Color3, #6A226D); /* 선의 색상 */
    margin-top: 17px;
    margin-bottom: 32px;
`;