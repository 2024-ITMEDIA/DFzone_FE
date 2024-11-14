import styled, { css } from "styled-components";
import palette from "../lib/colorPalette";

export const Main = styled.div`
    height: 100vh;
    @media (hover: hover) and (pointer: fine) {
        height: 100vh;
    }
`;

export const Animations = styled.div`
    width: 100vw;
    position: relative;
    @media (hover: hover) and (pointer: fine) {
        height: 100vh;
    }
`;

const animationStyles = css`
    ${({ animate }) => animate && css`
        transform: translate(0, 0);
        transition: all 1s ease;
    `}
`;

export const Title = styled.div`
    width: 300px;
    height: 22px;
    display: flex;
    align-items: center;
    color: ${palette.color3};
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 10px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px;
    position: absolute;
    z-index: 10;
    top: 46px;
    left: 35px;
    @media (hover: hover) and (pointer: fine) {
        width: 520px;
        font-size: 20px;
        position: absolute;
        top: 74px;
        left: 57px;
    }
`;

export const Logo = styled.img`
    width: ${({ animate }) => (animate ? "233px" : "306px")};
    height: ${({ animate }) => (animate ? "134px" : "176px")};
    position: absolute;
    z-index: 10;
    top: ${({ animate }) => (animate ? "66px" : "68px")};
    left: 30px;
    ${animationStyles}
    @media (hover: hover) and (pointer: fine) {
        width: 517px;
        height: 297px;
        position: absolute;
        top: 101px;
        left: 57px;
    }
`;

export const Date = styled.img`
    width: 131px;
    height: 52px;
    position: absolute;
    z-index: 10;
    top: 253px;
    left: 30px;
    opacity: ${({ animate }) => (animate ? 0 : 1)};
    ${animationStyles}
    @media (hover: hover) and (pointer: fine) {
        width: 288px;
        height: 114px;
        position: absolute;
        top: 416px;
        left: 57px;
    }
`;

export const Center = styled.img`
    width: 332px;
    height: 324px;
    position: absolute;
    z-index: 8;
    top: ${({ animate }) => (animate ? "266px" : "411px")};
    right: 34px;
    ${animationStyles}
    @media (hover: hover) and (pointer: fine) {
        width: 628px;
        height: 614px;
        position: absolute;
        top: 80px;
        right: 100px;
    }
`;


export const Flower = styled.img`
    width: 55px;
    height: 49px;
    position: absolute;
    z-index: 5;
    top: ${({ animate }) => (animate ? "291px" : "470px")};
    left: ${({ animate }) => (animate ? "9px" : "10px")};
    ${animationStyles}
    @media (hover: hover) and (pointer: fine) {
        width: 121px;
        height: 108px;
        top: unset;
        bottom: 46px;
        left: 246px;
    }
`;

export const Leaves = styled.img`
    width: 91px;
    height: 94px;
    position: absolute;
    z-index: 5;
    top: ${({ animate }) => (animate ? "221px" : "350px")};
    right: 0;
    ${animationStyles}
    @media (hover: hover) and (pointer: fine) {
        width: 200px;
        height: 207px;
        top: 18px;
        right: 0;
    }
`;

export const Light1 = styled.img`
    width: 89px;
    height: 81px;
    position: absolute;
    z-index: 5;
    top: ${({ animate }) => (animate ? "53px" : "232px")};
    right: 43px;
    ${animationStyles}
    @media (hover: hover) and (pointer: fine) {
        width: 195px;
        height: 178px;
        top: 62px;
        right: 647px;
    }
`;

export const Light2 = styled.img`
    width: 66px;
    height: 50px;
    position: absolute;
    z-index: 5;
    top: ${({ animate }) => (animate ? "203px" : "325px")};
    left: 15px;
    ${animationStyles}
    @media (hover: hover) and (pointer: fine) {
        width: 145px;
        height: 110px;
        top: 580px;
        left: 27px;
    }
`;

export const Rainbow = styled.img`
    width: 113px;
    height: 71px;
    position: absolute;
    z-index: 5;
    top: ${({ animate }) => (animate ? "213px" : "342px")};
    left: 70px;
    ${animationStyles}
    @media (hover: hover) and (pointer: fine) {
        width: 249px;
        height: 156px;
        top: 464px;
        left: 325px;
    }
`;

export const Spark1 = styled.img`
    width: 51px;
    height: 61px;
    position: absolute;
    z-index: 5;
    top: ${({ animate }) => (animate ? "106px" : "273px")};
    right: 10px;
    ${animationStyles}
    @media (hover: hover) and (pointer: fine) {
        width: 112px;
        height: 134px;
        top: unset;
        bottom: 235px;
        right: 144px;
    }
`;

export const Spark2 = styled.img`
    width: 51px;
    height: 54px;
    position: absolute;
    z-index: 5;
    top: ${({ animate }) => (animate ? "529px" : "708px")};
    left: 22px;
    @media (hover: hover) and (pointer: fine) {
        width: 112px;
        height: 119px;
        top: unset;
        bottom: 45px;
        left: 57px;
    }
`;

export const Cloud = styled.img`
    width: 104px;
    height: 54px;
    position: absolute;
    z-index: 5;
    top: ${({ animate }) => (animate ? "190px" : "323px")};
    right: 80px;
    ${animationStyles}
    @media (hover: hover) and (pointer: fine) {
        width: 229px;
        height: 119px;
        top: unset;
        bottom: 45px;
        right: 127px;
    }
`;

export const Exhibition = styled.img`
    width: 29px;
    height: 224px;
    position: absolute;
    z-index: 5;
    top: ${({ animate }) => (animate ? "372px" : "600px")};
    right: 10px;
    ${animationStyles}
    @media (hover: hover) and (pointer: fine) {
        width: 64px;
        height: 492px;
        top: unset;
        bottom: 104px;
        right: 26px;
    }
`;

export const ButtonArea = styled.div`
    width: 100vw;
    position: absolute;
    bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    opacity: ${({ animate }) => (animate ? 1 : 0)};
    ${animationStyles}
    @media (hover: hover) and (pointer: fine) {
        bottom: 40px;
        opacity: 1;
        z-index: 15;
    }
`;