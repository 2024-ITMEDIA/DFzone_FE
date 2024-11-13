import styled from "styled-components";
import palette from "../lib/colorPalette";

export const Info = styled.div`
        width: 100vw;
`;

export const Contents = styled.div`
    width: calc(100vw - 76px);
    padding: 0 38px 0 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 75px;
    margin: 41px 0 98px 0;
`;

export const Member = styled.div`
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (hover: hover) and (pointer: fine) {
        width: 200px;
    }
`;

export const Text = styled.div`
    color: ${palette.white};
    font-feature-settings: 'liga' off, 'clig' off;
    text-shadow: 0px 0px 3px #583687;
    font-family: "S-Core Dream";
    font-size: 12px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px;
    @media (hover: hover) and (pointer: fine) {
        font-size: 20px;
        margin-bottom: 12px;
    }
`;