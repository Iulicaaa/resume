import styled from 'styled-components';  

const Layout = (props) => {
  return (
    <Background>
      <Page>
        <Column>{props.left}</Column>
        <Column>{props.right}</Column>
      </Page>
    </Background>
    )
}

export default Layout;


const Background = styled.div`
  display: flex;
  background: #7E41FF;
  width: 100vw;
  min-height: 100vh;
  alighn-items: center;
  justify-content: center;
`;

const Page = styled.div`
  margin: 45px 58.5px 74px 66.5px;
  width: 769px;
  min-height: 1247px;
  flex-shrink: 0;
  border: 5px solid #000;
  background: #FCC526;
  box-shadow: 24px 20px 0px 0px rgba(52, 52, 51, 0.35);
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  flex: 1;
`;