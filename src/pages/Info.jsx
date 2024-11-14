import React, { useEffect, useState } from "react";
import * as I from "../styles/InfoStyle";
import Title from '../components/Title';
import DateBox from '../components/DateBox';
import MapBox from '../components/MapBox';
import AboutUs from '../components/AboutUs';

function Info() {
    const [animation, setAnimation] = useState(false);

    useEffect(()=>{
        const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
        if (mediaQuery.matches) {
            setAnimation(mediaQuery.matches);
        } else {
            setAnimation(mediaQuery.matches);
        }
    })
    
    return (
        <I.Info>
            <I.Contents>
                <div style={{ marginBottom: !animation ? "15px" : "40px", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Title title="전시 일정"/>
                    <DateBox />
                </div>
                <div style={{ marginBottom: !animation ? "15px" : "40px" }}>
                    <Title title="오시는 길"/>
                    <MapBox type={animation}/>
                </div>
                <div style={{ marginBottom: !animation ? "15px" : "40px" }}>
                    <Title title="AboutUs"/>
                    <AboutUs />
                </div>
                <div style={{ marginBottom: !animation ? "15px" : "40px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Title title="졸업전시준비위원회"/>
                    <I.Member>
                        <div>
                            <I.Text>위원장</I.Text>
                            <I.Text>부위원장</I.Text>
                            <I.Text>부위원장</I.Text>
                        </div>
                        <div>
                            <I.Text>이성경</I.Text>
                            <I.Text>이은결</I.Text>
                            <I.Text>김현아</I.Text>
                        </div>
                    </I.Member>
                </div>
            </I.Contents>
        </I.Info>
    );
}

export default Info;
