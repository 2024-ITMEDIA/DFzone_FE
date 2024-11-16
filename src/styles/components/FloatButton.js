import React from "react";
import styled from "styled-components";

const FloatButton = styled.button`
    position: fixed;
    bottom: 30px;
    right: 25px;
    width: 50px;
    height: 50px;
    background: url(${(props) => props.image}) no-repeat center/contain;
    border: none;
    cursor: pointer;
    z-index: 25;
    @media (hover: hover) and (pointer: fine) {
        width: 70px;
        height: 70px;
    }
`;

export default FloatButton;
