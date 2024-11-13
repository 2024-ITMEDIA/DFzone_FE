import React from "react";
import styled from "styled-components";
import palette from "../lib/colorPalette";

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 32px);
    margin-left: 32px;
    margin-right: 32px;
    // height: 52px;
    border-radius: 20px;
    border: 1px solid #6A226D;
    background: #FFF;
    box-shadow: 0px 0px 3px 0px #5C2487;
    box-sizing: border-box;
    padding: 15px 28px;
    @media (hover: hover) and (pointer: fine) {
        width: calc(100vw - 500px);
        padding: 30px 30px;
        margin: 0;
    }
`;

const TextMsg = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    color: #6A226D;
    /* text-align: center; */
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 12px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px;
    @media (hover: hover) and (pointer: fine) {
        font-size: 20px;
    }
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
    @media (hover: hover) and (pointer: fine) {
        font-size: 20px;
    }
`;

function TextBox({ data }) {
    console.log(data);
    return (
        <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
            <Box>
                <TextMsg>{data.message}</TextMsg>
                <TextAuthor>from. {data.author}</TextAuthor>

            </Box>
        </div>
    );
}

export default TextBox;
