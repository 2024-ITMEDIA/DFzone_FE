import styled from "styled-components";
import palette from "../../lib/colorPalette";

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;


export const ButtonRow = styled.div`
    display: flex;
    gap: 30px;
`;


export const Button = styled.div`
    border-radius: 20px;
    border: 1px solid #6A226D;
    background: #FFF;
    box-shadow: 0px 0px 3px 0px #5C2487;
    width: 138.548px;
    height: 57.626px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
    @media (hover: hover) and (pointer: fine) {
        width: 244px;
        height: 102px;
    }
`;

export const ButtonTitle = styled.div`
    color: #6A226D;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    padding: 18px;
    ${Button}:hover & {
        opacity: 0.7;
        cursor: pointer;
    }
    @media (hover: hover) and (pointer: fine) {
        font-size: 20px;
    }
`;