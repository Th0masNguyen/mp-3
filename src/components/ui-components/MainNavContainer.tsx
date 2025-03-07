import { styled } from "styled-components";

const MainNavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100vh;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export default MainNavContainer;
