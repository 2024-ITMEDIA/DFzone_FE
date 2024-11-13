import React from "react";
import styled from "styled-components";

const FloatButton = styled.button`
    position: fixed;
    bottom: 50px;
    right: 25px;
    width: 50px;
    height: 50px;
    background: url(${(props) => props.image}) no-repeat center/contain;
    border: none;
    cursor: pointer;
    z-index: 10;

    
`;

export default FloatButton;
