import React from "react";
import styled from "styled-components";

const SkillsCard = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Container>
  );
};

export default SkillsCard;

const Title = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Description = styled.span`
  color: #595959;
  font-family: Source Sans Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;

const Container = styled.div`
  display: inline-flex;
  padding: 21px 55px 22px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  border: 3px solid #211814;
  background: #ffe9a8;
  box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.15);
  width: 245px;
`;
