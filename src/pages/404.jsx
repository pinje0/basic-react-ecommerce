import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #18181b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const Heading = styled.h1`
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-top: 1.5rem;
`;

const Img = styled.img`
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-drag: none;
  -webkit-touch-callout: none;
`;

const PageNotFound = () => {
  const error = useRouteError();

  return (
    <Container>
      <Heading className="text-[32px] font-bold ">Page not found!</Heading>
      <Img src="/images/404.png" alt="404" width="600px" />
      <Paragraph>Sorry, we cannot find the requested page.</Paragraph>
      <p>{error.statusText || error.message}</p>
    </Container>
  );
};

export default PageNotFound;
