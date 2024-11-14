import React, { useState } from "react";
import styled from 'styled-components';
import float1 from "../img/img_web.png";
import float2 from "../img/img_web_hover.png";

const Image = styled.img`
    position: fixed;
    bottom: 30px;
    right: 25px;
    width: 50px;
    height: 50px;
    border: none;
    cursor: pointer;
    z-index: 10;
    @media (hover: hover) and (pointer: fine) {
        width: 70px;
        height: 70px;
    }
`;


function Float({ onClick }) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    return (
        <Image
        src={hovered ? float2 : float1}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        alt="floating"
        />
    );
}

export default Float;
