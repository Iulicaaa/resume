import styled from "styled-components";
import EducationCard from "./EducationCard";
import React from "react";

const Education = () => {
  return (
    <Container>
      <Title> Education</Title>
      <EducationList>
        <EducationCard
          start="2009"
          end="2015"
          title="Business Psychology"
          description="Belarussian State Pedagogical University (Minsk)"
        />
        <EducationCard
          start="2015"
          end="2016"
          title="It-Academy"
          description="Full Stack Web designer
                Front-end Dev (Minsk)"
        />
      </EducationList>
    </Container>
  );
};

export default Education;

const Title = styled.span`
  color: #0b0b0b;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 20px;
  margin-top: 23px;
`;

const Container = styled.div`
  padding: 50px;
`;
