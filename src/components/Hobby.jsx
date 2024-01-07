import styled from "styled-components";

const Hobby = () => {
  return (
    <Container>
      <Title>Hobby</Title>
      <Description>
        Sport./ .. Learning ./.. Music ./.. Travel ./.. Games
      </Description>
    </Container>
  );
};
export default Hobby;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 43px;
  margin-left: 58px;
  margin-bottom: 45px;
`;

const Title = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%; /* 18px */
  padding-bottom: 15px;
`;

const Description = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
`;
