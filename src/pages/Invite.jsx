import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import Footer from '../components/Footer';
import Float from "../components/Float";

function Invite({ projectId }) {
    const [animation, setAnimation] = useState(false);
    const location = useLocation();
    const lastViewedId = projectId || 1;
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
        if (mediaQuery.matches) {
            setAnimation(mediaQuery.matches);
        } else {
            setAnimation(mediaQuery.matches);
        }
        
        if (!mediaQuery.matches) {
            const scrollAnimation = () => {
                const scrollY = window.scrollY * 0.5 ;
    
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
                        fadeStart = 500 + (index - 5) * 20;
                        fadeEnd = fadeStart + 5;
                    } else if (index >= 10 && index <13) {
                        fadeStart = 750 + (index - 13) * 20;
                        fadeEnd = fadeStart + 5;
                    } else if (index >= 13 && index <14) {
                        fadeStart = 820 + (index - 14) * 20;
                        fadeEnd = fadeStart + 5;
                    } else {
                        fadeStart = 1000 + (index - 20) * 20;
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
                    date.style.left = "40px";
                } else {
                    date.style.position = "fixed";
                    date.style.top = "151px";
                    date.style.width = "90px";
                    date.style.height = "36px";
                    date.style.left = "40px";
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
        }
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
                        <div  className="fade-on-scroll" style={{ marginBottom: !animation ? "15px" : "40px" }}>
                            <I.Detail>
                                창작의 즐거움과 몰입 속에서 자유롭게 표현하고
                            </I.Detail>
                            <I.Detail>
                                도전하는 상상의 공간, 도파민 자유지대
                            </I.Detail>
                        </div>
                        <div className="fade-on-scroll" style={{ marginBottom: !animation ? "15px" : "40px" }}>
                            <I.Detail>
                                IT미디어공학도의 세계에서는
                            </I.Detail>
                            <I.Detail>
                                감정이 코드로 흐르고, 상상이 데이터로 변환됩니다.
                            </I.Detail>
                        </div>
                        <div className="fade-on-scroll" style={{ marginBottom: !animation ? "15px" : "40px" }}>
                            <I.Detail>
                                기술과 예술이 만나 경계를 허무는 이 공간에서,
                            </I.Detail>
                            <I.Detail>
                                우리는 한계 없는 짜릿함과 설렘의 순간을 경험했습니다.
                            </I.Detail>
                            <I.Detail>
                                그리고 마침내 자유로운 세계를 이루어냈습니다.
                            </I.Detail>
                        </div>
                        <div className="fade-on-scroll" style={{ marginBottom: !animation ? "15px" : "40px" }}>
                            <I.Detail>
                                오늘, 우리가 이뤄낸 이 자유지대에서 단순한 자극을 넘어
                            </I.Detail>
                            <I.Detail>
                                그 이상의 즐거움을 발견할 수 있길 바랍니다.
                            </I.Detail>
                        </div>
                    </div>
                    <div >
                        <Title className="fade-on-scroll" title="Information"/>
                        <I.SubTitle className="fade-on-scroll">전시 일정</I.SubTitle>
                        <DateBox type/>
                    </div>
                    <div>
                        <I.SubTitle className="fade-on-scroll">오시는 길</I.SubTitle>
                        <MapBox type={animation}/>
                    </div>
                    <div>
                        <I.SubTitle className="fade-on-scroll">About Us</I.SubTitle>
                        <AboutUs className="fade-on-scroll" type={animation}/>
                    </div>
                </I.Contents>
                <Title title="Projects"/>
                <Slick type={animation} lastViewedId={lastViewedId}/>
            </I.Invite>
            {animation && (<Footer type="invite"/>)}
            <Float onClick={() => handleNavigation('/')} />
        </>
    )
}

export default Invite;