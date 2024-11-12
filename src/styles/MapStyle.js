import styled from "styled-components";
import palette from "../lib/colorPalette";
import fb from "../img/img_float.png";

export const MapContainer = styled.div`
    width: 100vw;
    height: 208px;
    margin-top: 100px;
    position: relative;
`;

export const Studio = styled.div`
    display:flex;
    flex-direction: column;
`;

export const StudioNumber = styled.div`
    color: var(--Color3, #6A226D);
    margin-bottom: 5px;
    margin-top: 60px;
    .special-margin {
    margin-top: 0px;
    }
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
`;

export const TeamName = styled.div`
    color: var(--Backgrounds-Primary, #FFF);
    text-align: center;
    margin-bottom: 5px;
    margin-top: 17px;
    font-feature-settings: 'liga' off, 'clig' off;
    text-shadow: 0px 0px 3px #583687;
    font-family: "S-Core Dream";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 157.143% */
`;

export const TeamMember = styled.div`
    color: var(--Labels-Primary, #000);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px; /* 183.333% */
`;

const Button = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    background: url(${(props) => props.image}) no-repeat center;
    background-size: cover;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.95);
    }
`;