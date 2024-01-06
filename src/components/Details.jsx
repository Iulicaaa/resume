import styled from 'styled-components';

const Details = () => {
  return(
    <Container>
      <Name> Katherine Monroe</Name>
      <Title> UX/UI Designer</Title>
      <ContactRow>
        <Contact>+99 (99) 9.9999-9999</Contact>
        <Contact>katherinem@email.com</Contact>
      </ContactRow>
      
    </Container>
  )
}

export default Details;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 43px;
  margin-left: 58px;
`;


const Name = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: 140%; /* 50.4px */
`;

const Title = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  padding-bottom: 6px;
`;

const Contact = styled.span`
  
`;

const ContactRow = styled.div`
  color: #0B0B0B;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

