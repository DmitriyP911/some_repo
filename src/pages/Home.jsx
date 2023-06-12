import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 50px);
`;
const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
`;

function Home() {
  return (
    <Container>
      <Title>Welcome to my PhoneBook!</Title>
      <Outlet />
    </Container>
  );
}
export default Home;
