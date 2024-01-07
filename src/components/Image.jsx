import styled from "styled-components";

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
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.img`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 213px;
  height: 266px;
  flex-shrink: 0;
  box-shadow: 15px 15px 0px 0px #928cf8;
  border: 3px solid #211814;
  margin-top: -26px;
`;

const AvailableSign = styled.div`
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: right;
  flex-direction: column;
  background-color: transparent;
  color: white;
  top: 100%;
  left: 100%;
  transform: translate(200%, -100%);
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1px;
`;
