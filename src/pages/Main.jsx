import React, { useEffect, useState }from "react";
import * as M from "../styles/MainStyle";
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
import Button from '../components/Button';

function Main() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <M.Main>
            <M.Animations>
                <M.Title>2024 덕성여자대학교 IT미디어공학전공 제12회 졸업전시회</M.Title>
                <M.Logo src={logo} alt='도파민 자유지대' animate={animate} />
                <M.Date src={date} alt='2024/11/27-11/29/' animate={animate} />
                <M.Center src={center} alt='center' animate={animate} />
                <M.Flower src={flower} alt='flower' animate={animate} />
                <M.Leaves src={leaves} alt='leaves' animate={animate} />
                <M.Light1 src={light1} alt='light1' animate={animate} />
                <M.Light2 src={light2} alt='light2' animate={animate} />
                <M.Rainbow src={rainbow} alt='rainbow' animate={animate} />
                <M.Spark1 src={spark1} alt='spark1' animate={animate} />
                <M.Spark2 src={spark2} alt='spark2' animate={animate} />
                <M.Cloud src={cloud} alt='cloud' animate={animate} />
                <M.Exhibition src={exhibition} alt='exhibition' animate={animate} />
            </M.Animations>
            <M.ButtonArea animate={animate}>
                <Button />
            </M.ButtonArea>
        </M.Main>
    );
}

export default Main;
