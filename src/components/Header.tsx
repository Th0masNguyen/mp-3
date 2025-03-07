import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 2vh 2vw;
  background-color: rgb(255, 112, 112);
  h1 {
    font-size: calc(2px + 4vw);
    color: rgb(255, 248, 239);
  }
  p {
    font-size: calc(2px + 2vw);
    color: rgb(255, 248, 239);
  }

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;
export default function Header() {
  return (
    <StyledHeader>
      <h1>Thomas Nguyen</h1>
      <p>My Online Resume</p>
    </StyledHeader>
  );
}
