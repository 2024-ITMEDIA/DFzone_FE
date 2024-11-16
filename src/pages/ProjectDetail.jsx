import React, { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "../lib/colorPalette";
import axios from "axios";
import { useParams } from "react-router-dom";
import Title from "../components/Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 42px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (hover: hover) and (pointer: fine) {
    gap: 30px;
  }
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 63px;
  margin-bottom: 73px;
  @media (hover: hover) and (pointer: fine) {
    gap: 30px;
  }
`;

// const Title = styled.div`
//   color: ${palette.color3};
//   text-align: center;
//   font-feature-settings: "liga" off, "clig" off;
//   font-family: "S-Core Dream";
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 200;
//   line-height: 22px;
//   margin-bottom: 17px;
//   width: 60vw;
// `;

// const Line = styled.div`
//   width: 40px;
//   height: 1px;
//   background: ${palette.color3};
// `;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
  @media (hover: hover) and (pointer: fine) {
    width: 628px;
    max-width: unset;
    margin-bottom: 30px;
  }
`;

const Textbox = styled.div`
  margin-top: 15px;
  @media (hover: hover) and (pointer: fine) {
    width: 628px;
  }
`;

const Text = styled.div`
  color: var(--Backgrounds-Primary, #fff);
  font-feature-settings: "liga" off, "clig" off;
  font-family: "S-Core Dream";
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: 22px; /* 183.333% */
  width: calc(100vw - 84px);
  @media (hover: hover) and (pointer: fine) {
      width: 628px;
      font-size: 20px;
      line-height: 35px;
      margin-bottom: 13px;
    }
`;

function ProjectList({ setProjectId }) {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    // API 호출 함수 정의
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}/api/project-detail/${id}/`);
        setProjectData(response.data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [id]);

  useEffect(() => {
    setProjectId(id);
}, [id, setProjectId]);

  if (!projectData) return <p>Loading...</p>;

  return (
    <Container>
      <Intro>
        <Title title={projectData.team.project_name}/>
        <Image src={`${import.meta.env.VITE_API}${projectData.team.project_image}`} alt="Project Image" />
        <Textbox>
          <Text style={{color: '#6A226D'}}>작품소개 |</Text>
          <Text>{projectData.project_intro}</Text>
        </Textbox>
        <Textbox>
          <Text style={{color: '#6A226D'}}>기획의도 |</Text>
          <Text>{projectData.design_intent}</Text>
        </Textbox>
      </Intro>
      <Team>
        
        <Title title={projectData.team.team_name}/>
        {projectData.team_images &&
          projectData.team_images.map((image, index) => <Image key={index} src={`${import.meta.env.VITE_API}${image}`} alt={`Team Image ${index + 1}`} />)}
        <Text style={{ marginTop: "15px" }}>
          {Object.entries(projectData.team.members).map(([name, roles]) => (
            <p key={name}>
              {name} | {roles.join("")}
            </p>
          ))}
        </Text>
      </Team>
    </Container>
  );
}

export default ProjectList;
