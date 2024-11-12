import React from "react";
import { useNavigate } from "react-router-dom";
import * as B from "../styles/components/ButtonStyle";
import styled from "styled-components";

const ButtonContainer = B.ButtonContainer;
const ButtonRow = B.ButtonRow;
const ButtonTitle = B.ButtonTitle;

function Button() {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <>
            <B.ButtonContainer>
                <B.ButtonRow>
                    <B.Button onClick={() => handleNavigation('/info')}>
                    <ButtonTitle>Information</ButtonTitle>
                    </B.Button>
                    <B.Button onClick={() => handleNavigation('/project')}>
                        <ButtonTitle>Projects</ButtonTitle>
                    </B.Button>
                </B.ButtonRow>
                <B.ButtonRow>
                    <B.Button onClick={() => handleNavigation('/map')}>
                        <ButtonTitle>Map</ButtonTitle>
                    </B.Button>
                    <B.Button onClick={() => handleNavigation('/guestbook')}>
                        <ButtonTitle>Guestbook</ButtonTitle>
                    </B.Button>
                </B.ButtonRow>
            </B.ButtonContainer>
        </>
    );
}

export default Button;
