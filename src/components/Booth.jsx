import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const BoothContainer = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`;

const Studio = styled.div`
    position: absolute;
    border: 2px solid var(--Color3, #6A226D);
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
    color: var(--Labels-Primary, #000);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 9px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px; /* 275% */

    &:hover {
        background-color: #6A226D;
        color: #fff;
    }
`;

const Booth = ({ onStudioClick }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // 화면 크기 변경 시 업데이트
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // 스튜디오 데이터
    const studios = [
        {
            id: 1,
            name: "Studio 1",
            top: "130px",
            left: screenWidth <= 370 ? "10px" : screenWidth <= 425 ? "30px" : "60px",
            width: "70px",
            height: "55px",
        },
        {
            id: 2,
            name: "Studio 2",
            top: "130px",
            left: screenWidth <= 370 ? "86px" : screenWidth <= 425 ? "106px" : "136px",
            width: "45px",
            height: "55px",
        },
        {
            id: 3,
            name: "Studio 3",
            top: "155px",
            left: screenWidth <= 360 ? "142px" : screenWidth <= 425 ? "160px" : "193px",
            width: "65px",
            height: "32px",
        },
        {
            id: 4,
            name: "Studio 4",
            top: "155px",
            left: screenWidth <= 360 ? "213px" : screenWidth <= 425 ? "231px" : "265px",
            width: "65px",
            height: "32px",
        },
        {
            id: 5,
            name: "Studio 5",
            top: "139px",
            left: screenWidth <= 360 ? "292px" : screenWidth <= 425 ? "305px" : "345px",
            width: "42px",
            height: "49px",
        },
        {
            id: 6,
            name: "Studio 6",
            top: "74px",
            left: screenWidth <= 360 ? "292px" : screenWidth <= 425 ? "305px" : "345px",
            width: "42px",
            height: "49px",
        },
        {
            id: 7,
            name: "Studio 7",
            top: "10px",
            left: screenWidth <= 360 ? "292px" : screenWidth <= 425 ? "305px" : "345px",
            width: "42px",
            height: "49px",
        },
        {
            id: 10,
            name: "Studio 10",
            top: "10px",
            left: screenWidth <= 360 ? "40px" : screenWidth <= 425 ? "60px" : "90px",
            width: "70px",
            height: "39px",
        },
    ];

    return (
        <BoothContainer>
            {studios.map(studio => (
                <Studio
                    key={studio.id}
                    style={{
                        top: studio.top,
                        left: studio.left,
                        width: studio.width,
                        height: studio.height,
                    }}
                    onClick={() => onStudioClick(studio.id)}
                >
                    {studio.name}
                </Studio>
            ))}
        </BoothContainer>
    );
};

export default Booth;
