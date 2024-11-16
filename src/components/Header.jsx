import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as H from "../styles/components/HeaderStyle";
import back from "../img/icon_back.png";
import Menu from "./Menu";

function Header({ projectId }) {
    const location = useLocation();
    const navigate = useNavigate();
    const showBack = /^\/project\/\d+/.test(location.pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [startMenu, setStartMenu] = useState('');

    useEffect(() => {
        setStartMenu('start');
    }, []);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        <H.Header>
            {isMenuOpen && (
                <H.ToggleMenu>
                    <H.NavItem onClick={() => handleNavigation('/')}>Main</H.NavItem>
                    <H.NavItem onClick={() => handleNavigation('/info')}>Information</H.NavItem>
                    <H.NavItem onClick={() => handleNavigation('/project')}>Projects</H.NavItem>
                    <H.NavItem onClick={() => handleNavigation('/map')}>Map</H.NavItem>
                    <H.NavItem onClick={() => handleNavigation('/guestbook')}>Guestbook</H.NavItem>
                </H.ToggleMenu>
            )}
            {showBack && (
                <H.Back onClick={() => navigate(-1, { state: { projectId } })}>
                    <img src={back} alt="뒤로가기" />
                </H.Back>
            )}
            {!showBack && <div style={{ width: "1px" }} />}
            <Menu startMenu={startMenu} isMenuOpen={isMenuOpen} onClick={handleMenuToggle} />
        </H.Header>
    );
}

export default Header;
