import React, { useRef } from "react";
import * as M from "../styles/MapStyle";
import Booth from "../components/Booth";
import Fb from "../styles/components/FloatButton";
import scrollUpImage from "../img/img_float.png";

function Map() {
    // 스튜디오 참조 생성
    const studioRefs = {
        1: useRef(null),
        2: useRef(null),
        3: useRef(null),
        4: useRef(null),
        5: useRef(null),
        6: useRef(null),
        7: useRef(null),
        10: useRef(null),
    };

    // 스튜디오로 스크롤하는 함수
    const scrollToStudio = (studioId) => {
        const ref = studioRefs[studioId];
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <M.MapContainer>
                <Booth onStudioClick={scrollToStudio} />
            </M.MapContainer>

            {/* 스튜디오 목록 */}
            <M.Studio ref={studioRefs[1]}>
                <M.StudioNumber>※ Studio 1</M.StudioNumber>
                <M.TeamName>펫연구소</M.TeamName>
                <M.TeamMember>한서영 | 이아영 | 진희정 | 이수빈</M.TeamMember>
                <M.TeamName>덕드림</M.TeamName>
                <M.TeamMember>김현아 | 전한나 | 박연주 | 김소현</M.TeamMember>
                <M.TeamName>감자빵</M.TeamName>
                <M.TeamMember>김주혜 | 김지은 | 이예진 | 조유진 | 한채희</M.TeamMember>
            </M.Studio>

            <M.Studio ref={studioRefs[2]}>
                <M.StudioNumber>※ Studio 2</M.StudioNumber>
                <M.TeamName>뉴땡</M.TeamName>
                <M.TeamMember>김나리 | 김미소 | 김예린 | 이현지</M.TeamMember>
                <M.TeamName>아바타</M.TeamName>
                <M.TeamMember>강인아 | 김유빈 | 유수아</M.TeamMember>
            </M.Studio>

            <M.Studio ref={studioRefs[3]}>
                <M.StudioNumber>※ Studio 3</M.StudioNumber>
                <M.TeamName>라온하제</M.TeamName>
                <M.TeamMember>동은후 | 서은교 | 이태은 | 성채린</M.TeamMember>
                <M.TeamName>공공이</M.TeamName>
                <M.TeamMember>김서정 | 권유리</M.TeamMember>
            </M.Studio>

            <M.Studio ref={studioRefs[4]}>
                <M.StudioNumber>※ Studio 4</M.StudioNumber>
                <M.TeamName>I’m20</M.TeamName>
                <M.TeamMember>홍지은 | 손지우 | 이예진 | 김현진</M.TeamMember>
                <M.TeamName>엉그리덕새</M.TeamName>
                <M.TeamMember>최가인 | 이채은 | 심유진</M.TeamMember>
                <M.TeamName>덕솔</M.TeamName>
                <M.TeamMember>서수현 | 권세림 | 이주연 | 한결</M.TeamMember>
            </M.Studio>

            <M.Studio ref={studioRefs[5]}>
                <M.StudioNumber>※ Studio 5</M.StudioNumber>
                <M.TeamName>몽즈</M.TeamName>
                <M.TeamMember>이은결 | 양지예 | 이정빈 | 김성연</M.TeamMember>
            </M.Studio>

            <M.Studio ref={studioRefs[6]}>
                <M.StudioNumber>※ Studio 6</M.StudioNumber>
                <M.TeamName>무무</M.TeamName>
                <M.TeamMember>이성경 | 나가영 | 김지영 | 조예성</M.TeamMember>
            </M.Studio>

            <M.Studio ref={studioRefs[7]}>
                <M.StudioNumber>※ Studio 7</M.StudioNumber>
                <M.TeamName>럭키미키</M.TeamName>
                <M.TeamMember>김슬기 | 김인영 | 윤보민 | 전예진</M.TeamMember>
            </M.Studio>

            <M.Studio ref={studioRefs[10]}>
                <M.StudioNumber>※ Studio 10</M.StudioNumber>
                <M.TeamName>뽀글팝스</M.TeamName>
                <M.TeamMember>김유정 | 김정은 | 민유빈 | 강이서</M.TeamMember>
            </M.Studio>

            {/* 플로팅 버튼 */}
            <Fb image={scrollUpImage} onClick={scrollToTop} />
            
        </>
    );
}

export default Map;
