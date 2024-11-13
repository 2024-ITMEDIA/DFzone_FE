import styled from "styled-components";
import palette from "../../lib/colorPalette";

export const Container = styled.div`
    display: flex;
    width: calc(100vw - 64px);
    @media (hover: hover) and (pointer: fine) {
        width: calc(100vw - 500px);
    }
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: center;  */
    gap: 8px;
    flex-shrink: 0;
    padding: 16px 32px 16px 32px; 
`;

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between; 
    align-items: center; 
`;

export const NameField = styled.div`
    color: #6A226D;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 12px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px; 
    @media (hover: hover) and (pointer: fine) {
        font-size: 20px;
    }
`;

export const NameBox = styled(NameField).attrs({ as: 'textarea' })`
    display: flex;
    justify-content: flex-start;
    width: calc(100vw - 250px);
    height: 22px;
    padding: 9px 28px;
    align-items: center;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.34);
    box-shadow: 0px 0px 3px 0px #583687;
    resize: none;
    outline: none;
    border: none; 
    @media (hover: hover) and (pointer: fine) {
        width: 200px;
        height: 24px;
        padding: 16px 28px;
    }
    &::placeholder {
        color: rgba(106, 34, 109, 0.5);
    }
`;

export const TextField = styled.div`
    color: #6A226d;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 12px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px; 
    @media (hover: hover) and (pointer: fine) {
        font-size: 20px;
        height: 50px;
    }
`;

export const TextBox = styled(TextField).attrs({ as: 'textarea' })`
    width: calc(100vw - 116px);
    border: none;
    outline: none;
    padding: 16px 28px;
    background: rgba(255, 255, 255, 0.34);
    box-shadow: 0px 0px 3px 0px #583687;
    color: var(--Color3, #6A226D);
    resize: none;
    border-radius: 20px;
    &:-webkit-scrollbar {
    display: none;
    }
    & {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    &::placeholder {
        color: rgba(106, 34, 109, 0.5);
    }
    @media (hover: hover) and (pointer: fine) {
        width: calc(100vw - 560px);
        padding: 32px 28px;
    }
`;

export const SendButton = styled.button`
    padding: 12px 24px;
    background: var(--Color3, #6A226D);
    box-shadow: 0px 0px 3px 0px #5C2487;
    color: white; 
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 12px;
    font-family: "S-Core Dream";
    @media (hover: hover) and (pointer: fine) {
        font-size: 20px;
        padding: 14px 30px;
    }
    &:hover {
        background-color: #462A5E;
    }

    &:disabled {
        opacity: 0.5;
        color: rgba(255, 255, 255, 0.5);
        cursor: not-allowed;
    }
`;

// 미디어 쿼리 추가
const breakpoints = {
    mobileS : '320px',
    mobileM : '375px',
    mobileL : '425px',
    tablet : '768px',
    laptop : '1024px',
    laptopL : '1440px',
    desktop : '2560px'
};

export const ResponsiveContainer = styled(Container)`
    @media (max-width:${breakpoints.mobileL}) {
        ${NameBox}, ${TextBox} {
           max-width: calc(100% - 32px); /* 작은 화면에서 최대 너비 조정 */
            font-size: 14px;
        }

        ${SendButton} {
            width: calc(100% - 32px);
            font-size: 14px;
        }
    }
`;