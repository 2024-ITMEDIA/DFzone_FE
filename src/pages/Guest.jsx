import React from "react";
import * as G from "../styles/GuestStyle";
import TextField from '../components/TextField';

function Guest() {
    return (
        <>
            <G.GuestContainer>
                <G.Title>Guestbook</G.Title>
                <G.Line></G.Line>
                <TextField />               
            </G.GuestContainer>
        </>
    );
}

export default Guest;
