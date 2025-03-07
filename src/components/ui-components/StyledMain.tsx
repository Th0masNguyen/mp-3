import styled from "styled-components";

const StyledMain = styled.main`
  width: 70%;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 248, 239);
  padding: 2vh 2vw;
  height: 100%;
  p,
  li {
    font-size: calc(2px + 1.5vw);
    margin-bottom: 2vh;
  }
  h3 {
    text-align: center;
    font-size: calc(2px + 4vw);
    margin: 2vh 0;
    font-family: "Dancing Script", serif;
    font-weight: bold;
  }
  h4 {
    font-size: calc(2px + 1.7vw);
  }
  h5 {
    font-size: calc(2px + 1.4vw);
  }
  ul {
    margin-bottom: 5vh;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export default StyledMain;
