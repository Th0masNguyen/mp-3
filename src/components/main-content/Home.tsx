import { styled } from "styled-components";
import StyledMain from "../ui-components/StyledMain";

const ImgContainer = styled.div`
  width: 40%;
  margin: 1vh auto;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5vw;
  }
`;

export default function Home() {
  return (
    <StyledMain>
      <h3>Home</h3>
      <ImgContainer>
        <img src="me.png" alt="A picture of Thomas Nguyen"></img>
      </ImgContainer>
      <p>
        My name is Thomas Nguyen, and I am an undergraduate student studying
        computer science at Boston University. I would like to work as a
        software engineer. Please hire me.
      </p>
      <p>
        Welcome to my website. The information enclosed within this website may
        or may not accurately reflect the character or capabilities of myself.
      </p>
    </StyledMain>
  );
}
