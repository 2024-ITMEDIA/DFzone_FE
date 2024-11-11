import styled from "styled-components";
import palette from "../../lib/colorPalette";

export const Header = styled.div`
    width: calc(100vw - 50px);
    height: 38px;
    padding: 21px 20px 21px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Back = styled.div`
    width: 12.29px;
    height: 20px;
    cursor: pointer;
    z-index: 2; 
`;

export const ToggleMenu = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100vw - 40px);
    height: 236px;
    background-color:rgba(255, 255, 255, 0.5);
    padding: 84px 20px 26px 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    z-index: 0;
`;

export const NavItem = styled.div`
    color: ${palette.white};
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
`;