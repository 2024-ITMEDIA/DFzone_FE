import styled from "styled-components";
import palette from "../lib/colorPalette";

export const Invite = styled.div`
    width: 100vw;
    height: calc(100vh + 100000px);
`;

export const Animations = styled.div`
    width: 100vw;
    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
    }
`;

export const Back = styled.div`
    width: 100vw;
    height: calc(100vh - 632px);
    background: linear-gradient(179deg, #CDAECD 0%, #7876B0 380%);
    position: fixed;
    z-index: 1;
    top: 0;
`;

export const Title = styled.div`
    width: 260px;
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
    position: fixed;
    z-index: 10;
    top: 46px;
    left: 35px;
    transform-origin: top left;
`;

export const Logo = styled.img`
    width: 306px;
    height: 176px;
    position: fixed;
    z-index: 10;
    top: 68px;
    left: 30px;
`;

export const Date = styled.img`
    z-index: 10;
    transform-origin: left top;
    width: 131px;
    height: 52px;
    top: 253px;
    left: 30px;
    position: fixed;
`;

export const Center = styled.img`
    z-index: 8;
    transform-origin: left top;
    width: 332px;
    height: 324px;
    top: 411px;
    right: 34px;
    position: fixed;
`;

const animatedStyle = `
    transition: transform 0.5s ease, opacity 0.5s ease;
`;

export const Flower = styled.img`
    ${animatedStyle}
    width: 55px;
    height: 49px;
    position: absolute;
    z-index: 5;
    top: 470px;
    left: 10px;
`;

export const Leaves = styled.img`
    ${animatedStyle}
    width: 91px;
    height: 94px;
    position: absolute;
    z-index: 5;
    top: 350px;
    right: 0;
`;

export const Light1 = styled.img`
    ${animatedStyle}
    width: 89px;
    height: 81px;
    position: absolute;
    z-index: 5;
    top: 232px;
    right: 43px;
`;

export const Light2 = styled.img`
    ${animatedStyle}
    width: 66px;
    height: 50px;
    position: absolute;
    z-index: 5;
    top: 325px;
    left: 15px;
`;

export const Rainbow = styled.img`
    ${animatedStyle}
    width: 113px;
    height: 71px;
    position: absolute;
    z-index: 5;
    top: 342px;
    left: 70px;
`;

export const Spark1 = styled.img`
    ${animatedStyle}
    width: 51px;
    height: 61px;
    position: absolute;
    z-index: 5;
    top: 273px;
    right: 10px;
`;

export const Spark2 = styled.img`
    ${animatedStyle}
    width: 51px;
    height: 54px;
    position: absolute;
    z-index: 5;
    top: 708px;
    left: 22px;
`;

export const Cloud = styled.img`
    ${animatedStyle}
    width: 104px;
    height: 54px;
    position: absolute;
    z-index: 5;
    top: 323px;
    right: 80px;
`;

export const Exhibition = styled.img`
    ${animatedStyle}
    width: 29px;
    height: 224px;
    position: absolute;
    z-index: 5;
    top: 600px;
    right: 10px;
`;

export const ScrollArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 10px;
`;

export const Contents = styled.div`
    width: calc(100vw - 76px);
    padding: 0 38px 130px 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 75px;
    margin-top: 100vh;
`;

export const Detail = styled.div`
    color: ${palette.white};
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 12px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px;
    transition: opacity 0.3s ease;
`;

export const SubTitle = styled.div`
    color: ${palette.white};
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    text-shadow: 0px 0px 3px ${palette.shadow};
    font-family: "S-Core Dream";
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px;
    transition: opacity 0.3s ease;
`;