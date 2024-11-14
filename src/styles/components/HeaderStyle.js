import styled from "styled-components";
import palette from "../../lib/colorPalette";

export const Header = styled.div`
    width: calc(100vw - 50px);
    height: 38px;
    padding: 21px 20px 21px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (hover: hover) and (pointer: fine) {
        width: calc(100vw - 100px);
        padding: 30px 50px;
    }
`;

export const Back = styled.div`
    width: 12.29px;
    height: 20px;
    cursor: pointer;
    z-index: 15; 
`;

export const ToggleMenu = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100vw - 40px);
    height: 236px;
    background-color:rgba(255, 255, 255, 0.6);
    padding: 84px 20px 26px 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    z-index: 10;
    @media (hover: hover) and (pointer: fine) {
        height: 286px;
        gap: 29px;
    }
`;

export const NavItem = styled.div`
    color: ${palette.color3};
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    -webkit-text-stroke-width: 1;
    text-shadow: 0px 0px 3px ${palette.color3};
    font-family: "S-Core Dream";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    cursor: pointer;
    &:hover {
        color: ${palette.color1};
        text-shadow: 0px 0px 3px ${palette.color3};
    }
    @media (hover: hover) and (pointer: fine) {
        font-size: 20px;
    }
`;