import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BoothContainer1 = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 3%;
    @media (hover: hover) and (pointer: fine) {
        padding: 0 18%;
    }
`;

const BoothContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 29.71px;
`;

const BoothContainer3 = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: flex-end;
`;

const BoothContainer4 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;


const Studio = styled.div`
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
    line-height: 22px;
    &:hover {
        background-color: #6A226D;
        color: #fff;
    }
    @media (hover: hover) and (pointer: fine) {
        font-size: 20px;
    }
`;


const Booth = ({ onStudioClick }) => {
    const initialStudios = [
        { id: 1, name: "Studio 1", margin: "0 5.53px 0 0", width: "70px", height: "55px" },
        { id: 2, name: "Studio 2", margin: "0 11.81px 0 0", width: "45px", height: "55px" },
        { id: 3, name: "Studio 3", margin: "0 4.8px 0 0", width: "65px", height: "32px" },
        { id: 4, name: "Studio 4", margin: "0", width: "65px", height: "32px" },
        { id: 5, name: "Studio 5", margin: "8.12px 0 0 0", width: "42px", height: "49px" },
        { id: 6, name: "Studio 6", margin: "8.12px 0 0 0", width: "42px", height: "49px" },
        { id: 7, name: "Studio 7", margin: "0", width: "42px", height: "49px" },
        { id: 10, name: "Studio 10", margin: "0 0 0 20px", width: "70px", height: "39px" },
    ];

    const [studios, setStudios] = useState(initialStudios);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

        const updateDimensionsAndMargins = () => {
            if (mediaQuery.matches) {
                setStudios(studios.map(studio => {
                    const updatedMargin = (() => {
                        switch (studio.id) {
                            case 1: return "0 15.37px 0 0";
                            case 2: return "0 32.79px 0 0";
                            case 3: return "0 13.32px 0 0";
                            case 4: return "0 0 0 0";
                            case 5: return "22.54px 0 0 0";
                            case 6: return "22.54px 0 0 0";
                            case 7: return "0 0 0 0";
                            case 10: return "0 0 0 54.3px";
                            default: return studio.margin;
                        }
                    })();

                    return {
                        ...studio,
                        margin: updatedMargin,
                        width: `${parseFloat(studio.width) * 3}px`,
                        height: `${parseFloat(studio.height) * 3}px`
                    };
                }));
            } else {
                setStudios(initialStudios);
            }
        };

        updateDimensionsAndMargins();
        mediaQuery.addEventListener("change", updateDimensionsAndMargins);

        return () => {
            mediaQuery.removeEventListener("change", updateDimensionsAndMargins);
        };
    }, []);

    return (
        <BoothContainer1>
            <BoothContainer2>
                {studios
                    .filter(studio => studio.id === 10)
                    .map(studio => (
                        <Studio
                            key={studio.id}
                            style={{
                                margin: studio.margin,
                                width: studio.width,
                                height: studio.height,
                            }}
                            onClick={() => onStudioClick(studio.id)}
                        >
                            {studio.name}
                        </Studio>
                ))}
                <BoothContainer4>
                    {studios
                        .filter(studio => studio.id >= 1 && studio.id <= 4)
                        .map(studio => (
                            <Studio
                                key={studio.id}
                                style={{
                                    margin: studio.margin,
                                    width: studio.width,
                                    height: studio.height,
                                }}
                                onClick={() => onStudioClick(studio.id)}
                            >
                                {studio.name}
                            </Studio>
                        ))}
                </BoothContainer4>
            </BoothContainer2>
            <BoothContainer3>
                {studios
                    .filter(studio => studio.id >= 5 && studio.id <= 7)
                    .map(studio => (
                        <Studio
                            key={studio.id}
                            style={{
                                margin: studio.margin,
                                width: studio.width,
                                height: studio.height,
                            }}
                            onClick={() => onStudioClick(studio.id)}
                        >
                            {studio.name}
                        </Studio>
                    ))}
            </BoothContainer3>
        </BoothContainer1>
    );
};

export default Booth;
