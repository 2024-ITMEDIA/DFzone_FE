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

function Invite() {

    // scroll animation
    useEffect(() => {
        const scrollAnimation = () => {
            const scrollY = window.scrollY * 0.5 ;

            // classname animated animation
            const elements = document.querySelectorAll(".animated");
            
            elements.forEach((el) => {
                const offset = el.offsetTop;
                const speed = parseFloat(el.getAttribute("data-speed")) || 1;

                el.style.transform = `translateY(-${scrollY * speed * 2}px)`;
                el.style.opacity = Math.max(1 - (scrollY * 8) / offset, 0);
            });

            // Title animation
            const title = document.querySelector("#title");
            if (scrollY < 200) {
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

    return (
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
                    <I.ScrollArea><Scroll /></I.ScrollArea>
                </I.Animations>

            </I.Invite>
        </>
    );
}

export default Invite;
