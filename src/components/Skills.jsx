import styled from "styled-components";
import SkillsCard from "./SkillsCard";
import React from "react";

const Skills = () => {
  return (
    <Container>
      <Title> Skills</Title>
      <SkillsList>
        <SkillsCard
          title="Software"
          description="Axure, Figma, Sketch, Photoshop,
          Illustrator, XD, Unity, Zeplin, Principle"
        />
        <SkillsCard
          title="Front-end"
          description="NPM, JavaScript, HTML, CSS, Bootstrap, Git, Lit"
        />
        <SkillsCard
          title="I Can"
          description="Protyping, Desktop Application, Mobile Applications, Web Sites, Admin Panels, CRM systems, Tilda, Banners, UI Kit, Brand book, Logo, OOUX, Shopify and more...................."
        />
      </SkillsList>
    </Container>
  );
};

export default Skills;

const Title = styled.span`
  color: #0b0b0b;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 20px;
  margin-top: 23px;
`;

const Container = styled.div`
  padding: 50px;
`;
