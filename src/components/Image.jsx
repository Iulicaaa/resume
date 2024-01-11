import styled from "styled-components";
import React from "react";
import MyImage from "./MyImage.png";

const ImageComponent = ({ src }) => {
  return (
    <Container>
      <Image src={MyImage} alt="Profile" />
      <AvailableSign>
        <Icon
          src="https://cdn2.iconfinder.com/data/icons/player-app-icons/512/2_on-512.png"
          alt="Available Icon"
        />
      </AvailableSign>
    </Container>
  );
};

export default ImageComponent;

const Container = styled.div`
  position: relative;
  width: 213px;
  height: 231px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: -30px;
  margin-left: 50px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 3px solid #211814;
  box-shadow: 15px 15px 0px 0px #fe74a6;
`;

const AvailableSign = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  color: white;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;
