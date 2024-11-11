import React from "react";
import * as B from "../styles/components/ButtonStyle";
import styled from "styled-components";

const ButtonContainer = B.ButtonContainer;
const ButtonRow = B.ButtonRow;
const ButtonTitle = B.ButtonTitle;

function Button() {
    return (
        <>
            <B.ButtonContainer>
                <B.ButtonRow>
                    <B.Button>
                    <ButtonTitle>Information</ButtonTitle>
                    </B.Button>
                    <B.Button>
                        <ButtonTitle>Projects</ButtonTitle>
                    </B.Button>
                </B.ButtonRow>
                <B.ButtonRow>
                    <B.Button>
                        <ButtonTitle>Map</ButtonTitle>
                    </B.Button>
                    <B.Button>
                        <ButtonTitle>Guestbook</ButtonTitle>
                    </B.Button>
                </B.ButtonRow>
            </B.ButtonContainer>
        </>
    );
}

export default Button;
