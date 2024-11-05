import React from "react";
import styled from "styled-components";
import palette from "../lib/colorPalette";

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 289px;
    height: 57px;
    border-radius: 20px;
    border: 1px solid #6A226D;
    background: #FFF;
    box-shadow: 0px 0px 3px 0px #5C2487;
    margin: 12px;
    box-sizing: border-box;
    padding: 0 30px;
`;

const Date = styled.div`
    color: #6A226D;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
`;

const Time = styled.div`
    color: #6A226D;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "S-Core Dream";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
`

function DateBox() {
    return (
        <>
            <Box className="fade-on-scroll">
                <Date>2024.11.27. 수요일</Date>
                <Time>10:00 - 17:00</Time>
            </Box>
            <Box className="fade-on-scroll">
                <Date>2024.11.28. 목요일</Date>
                <Time>10:00 - 17:00</Time>
            </Box>
            <Box className="fade-on-scroll">
                <Date>2024.11.29. 금요일</Date>
                <Time>10:00 - 14:00</Time>
            </Box>
        </>
    );
}


export default DateBox;
