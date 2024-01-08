import styled from "styled-components";
import React from "react";

const Image = ({ src }) => {
  return (
    <Layout>
      <Container src={src} />
      <AvailableSign>
        <Icon
          src="https://cdn2.iconfinder.com/data/icons/player-app-icons/512/2_on-512.png"
          alt="Available Icon"
        />
      </AvailableSign>
    </Layout>
  );
};

export default Image;

const Layout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.img`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 190px;
  height: 266px;
  flex-shrink: 0;
  box-shadow: 15px 15px 0px 0px #928cf8;
  border: 3px solid #211814;
  margin-top: -26px;
`;

const AvailableSign = styled.div`
  display: flex;
  align-items: right;
  flex-direction: column;
  background-color: transparent;
  color: white;
  position: absolute;
  bottom: 6px;
  right: 130px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1px;
`;
