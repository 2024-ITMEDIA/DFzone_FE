import React from "react";
import styled from "styled-components";
import palette from "../lib/colorPalette";

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 338px;
    // height: 52px;
    border-radius: 20px;
    border: 1px solid #6A226D;
    background: #FFF;
    box-shadow: 0px 0px 3px 0px #5C2487;
    margin: 12px;
    box-sizing: border-box;
    padding: 15px 28px;
`;

const TextMsg = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    color: #6A226D;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 12px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px;
    
`;

const TextAuthor = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    color: #6A226D;
    text-align: right;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 12px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px;
    
`;

function TextBox({ data }) {
    console.log(data);
    return (
        <>
            <Box>
                <TextMsg>{data.message}</TextMsg>
                <TextAuthor>from. {data.author}</TextAuthor>

            </Box>
        </>
    );
}

export default TextBox;
