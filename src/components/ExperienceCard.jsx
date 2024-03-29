import styled from "styled-components";
import React from "react";

const ExperienceCard = (props) => {
  return (
    <Container boxShadow={props.boxShadow}>
      <SpacedColumn>
        <Title>{props.title}</Title>
        <Period>
          {props.start}-{props.end}
        </Period>
      </SpacedColumn>
      <SpacedColumn>
        <Company>
          <CompanyLogo src={props.companyLogo} />
          <CompanyName>{props.companyName}</CompanyName>
        </Company>
        <Location>{props.location}</Location>
      </SpacedColumn>
      <BuletPoints>
        {props.buletPoints?.map((point, i) => (
          <Point key={i}>{point}</Point>
        ))}
      </BuletPoints>
    </Container>
  );
};

export default ExperienceCard;

const Container = styled.div`
  display: flex;
  width: 370px;
  padding: 31px 25px 31px 26px;
  margin-left: -26px;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
  border: 3px solid #211814;
  background: #fff;
  box-shadow: ${(props) => props.boxShadow};
`;

const SpacedColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Period = styled.span`
  color: #595959;
  text-align: right;
  font-family: "Source Sans 3";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;

const Company = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const CompanyLogo = styled.img`
  width: 32px;
  height: 31.979px;
  flex-shrink: 0;
`;

const CompanyName = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Location = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const BuletPoints = styled.ul`
  columns: 2;
`;

const Point = styled.li`
  color: #595959;
  font-family: "Source Sans 3";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;
