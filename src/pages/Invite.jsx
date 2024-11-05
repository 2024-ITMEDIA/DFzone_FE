import React, { useEffect } from "react";
import * as I from "../styles/InviteStyle";
import logo from "../img/text_logo.png";
import date from "../img/text_date.png";
import center from "../img/img_center.png";
import flower from "../img/img_flower.png";
import leaves from "../img/img_leaves.png";
import light1 from "../img/img_light1.png";
import light2 from "../img/img_light2.png";
import rainbow from "../img/img_rainbow.png";
import spark1 from "../img/img_spark1.png";
import spark2 from "../img/img_spark2.png";
import cloud from "../img/img_cloud.png";
import exhibition from "../img/text_exhibition.png";
import Scroll from '../components/Scroll';
import Title from '../components/Title';
import DateBox from '../components/DateBox';
import MapBox from '../components/MapBox';
import AboutUs from '../components/AboutUs';
import Slick from '../components/Slick';

function Invite() {
    useEffect(() => {
        const scrollAnimation = () => {
            const scrollY = window.scrollY * 0.5 ;
            console.log(scrollY); // contents 요소 애니메이션 타이밍 설정 후에 삭제

            // animated opacity
            const animatedElements = document.querySelectorAll(".animated");
            animatedElements.forEach((el) => {
                const offset = el.offsetTop;
                const speed = parseFloat(el.getAttribute("data-speed")) || 1;
                
                el.style.transform = `translateY(-${scrollY * speed }px)`;
                el.style.opacity = Math.max(1 - (scrollY * 4) / offset, 0);
            });

            // Contents opacity
            const contentElements = document.querySelectorAll("#contents .fade-on-scroll");
            contentElements.forEach((el, index) => {
                let fadeStart, fadeEnd;

                // cotents 요소 애니메이션 인덱스 및 타이밍 설정 작업 필요
                if (index < 5) {
                    fadeStart = 310 + index * 20;
                    fadeEnd = fadeStart + 5;
                } else if (index >= 5 && index <10) {
                    fadeStart = 470 + (index - 5) * 20;
                    fadeEnd = fadeStart + 5;
                } else {
                    fadeStart = 1000 + (index - 13) * 20;
                    fadeEnd = fadeStart + 5;
                }

                if (scrollY >= fadeStart && scrollY <= fadeEnd) {
                    const opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
                    el.style.opacity = opacity;
                } else if (scrollY > fadeEnd) {
                    el.style.opacity = 0;
                } else {
                    el.style.opacity = 1;
                }

                el.style.transition = "opacity 1s ease";
            });

            // Title animation
            const title = document.querySelector("#title");
            if (scrollY < 200) {
                title.style.position = "fixed";
                title.style.transformOrigin = "top left";
                title.style.fontSize = `${10 - scrollY * 0.015}px`;
                title.style.top = `${46 - scrollY * 0.135}px`;
            } else {
                title.style.position = "fixed";
                title.style.top = "19px";
                title.style.fontSize = "7px";
            }

            // Logo animation
            const logo = document.querySelector("#logo");
            if (scrollY < 200) {
                title.style.position = "fixed";
                logo.style.transformOrigin = "top left";
                logo.style.width = `${306 - scrollY * 0.64}px`;
                logo.style.height = `${176 - scrollY * 0.365}px`;
                logo.style.top = `${68 - scrollY * 0.14}px`;
            } else {
                logo.style.position = "fixed";
                logo.style.top = "40px";
                logo.style.width = "178px";
                logo.style.height = "103px";
            }

            // Date animation
            const date = document.querySelector("#date");
            if (scrollY < 200) {
                title.style.position = "fixed";
                date.style.transformOrigin = "top left";
                date.style.width = `${131 - scrollY * 0.205}px`;
                date.style.height = `${52 - scrollY * 0.08}px`;
                date.style.top = `${253 - scrollY * 0.51}px`;
                date.style.left = "30px";
            } else {
                date.style.position = "fixed";
                date.style.top = "151px";
                date.style.width = "90px";
                date.style.height = "36px";
                date.style.left = "30px";
            }

            // Center animation
            const center = document.querySelector("#center");
            if (scrollY < 200) {
                title.style.position = "fixed";
                center.style.transformOrigin = "top left";
                center.style.transform = `translateY(${(scrollY / 200) * 0.02}px) translateX(${scrollY * -0.12}px)`;
                center.style.width = `${332 - scrollY * 0.655}px`;
                center.style.height = `${324 - scrollY * 0.64}px`;
                center.style.top = `${411 - scrollY * 1.955}px`;
                center.style.right = `${scrollY * 0.1}px`;
                const rightValue = 34 - (scrollY / 200) * (34 + 9);
                center.style.right = `${rightValue}px`;
            } else {
                center.style.position = "fixed";
                center.style.top = "20px";
                center.style.width = "201px";
                center.style.height = "196px";
                center.style.right = "-9px";
            }
        };

        window.addEventListener("scroll", scrollAnimation);
        return () => window.removeEventListener("scroll", scrollAnimation);
    }, []);
    
    return(
        <>
            <I.Invite>
                <I.Animations>
                    <I.Title id="title">2024 덕성여자대학교 IT미디어공학전공 제12회 졸업전시회</I.Title>
                    <I.Logo id="logo" src={logo} alt='도파민 자유지대' />
                    <I.Date id="date" src={date} alt='2024/11/27-11/29/' />
                    <I.Center id="center" src={center} alt='center' />
                    <I.Flower className="animated" data-speed="1.5" src={flower} alt='flower' />
                    <I.Leaves className="animated" data-speed="1.5" src={leaves} alt='leaves' />
                    <I.Light1 className="animated" data-speed="1.5" src={light1} alt='light1' />
                    <I.Light2 className="animated" data-speed="1.5" src={light2} alt='light2' />
                    <I.Rainbow className="animated" data-speed="1.5" src={rainbow} alt='rainbow' />
                    <I.Spark1 className="animated" data-speed="1.5" src={spark1} alt='spark1' />
                    <I.Spark2 className="animated" data-speed="1.5" src={spark2} alt='spark2' />
                    <I.Cloud className="animated" data-speed="1.5" src={cloud} alt='cloud' />
                    <I.Exhibition className="animated" data-speed="1.5" src={exhibition} alt='exhibition' />
                    <I.ScrollArea>
                        <Scroll />
                    </I.ScrollArea>
                </I.Animations>
                <I.Contents id="contents">
                    <div>
                        <Title className="fade-on-scroll" title="Invitation"/>
                        <I.Detail className="fade-on-scroll">
                            졸업은 학부 생활의 마침표인 동시에 대학 그 후의 세상으로 나아감의 의미를 가지고 있습니다.
                        </I.Detail>
                        <I.Detail className="fade-on-scroll">
                            열정을 다해 달려온 학부생활의 마침표를 찍고, 문을 열었을 때 그 앞에 무엇이 펼쳐져 있을지는 알 수 없습니다.
                        </I.Detail>
                        <I.Detail className="fade-on-scroll">
                            다만, 알 수 없는 그 너머의 공간이 우리 모두가 꿈꾸던 찬란한 세상이길 바라며,
                        </I.Detail>
                        <I.Detail className="fade-on-scroll">
                            마침표를 의미하는 세미콜론, 그리고 그 틈새로 비치는 미정의 세계를 보여주는 전시를 기획했습니다.
                        </I.Detail>
                    </div>
                    <div >
                        <Title className="fade-on-scroll" title="Information"/>
                        <I.SubTitle className="fade-on-scroll">전시 일정</I.SubTitle>
                        <DateBox />
                    </div>
                    <div>
                        <I.SubTitle className="fade-on-scroll">오시는 길</I.SubTitle>
                        <MapBox />
                    </div>
                    <div>
                        <I.SubTitle className="fade-on-scroll">About Us</I.SubTitle>
                        <AboutUs className="fade-on-scroll"/>
                    </div>
                    <div>
                        <Title className="fade-on-scroll" title="Projects"/>
                        {/* slick */}
                    </div>
                </I.Contents>
            </I.Invite>
        </>
    )
}

export default Invite;