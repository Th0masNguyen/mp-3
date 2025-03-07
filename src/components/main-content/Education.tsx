import { styled } from "styled-components";
import StyledMain from "../ui-components/StyledMain";

const StyledList = styled.ul`
  list-style-type: none;
  text-align: center;
  padding-left: 0;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5vh 0;
`;

export default function Education() {
  return (
    <StyledMain>
      <h3>Education</h3>
      <StyledList>
        <li>
          <h4>
            Degree in Spookiness, <em>Monsters University</em>
          </h4>
          <p>June 2013</p>
        </li>
        <li>
          <h4>
            JD, <em>University of American Samoa</em>
          </h4>
          <p>May 1998</p>
        </li>
        <li>
          <h4>
            PhD in Some Kinda Magic Stuff? Idk, <em>Hogwarts</em>
          </h4>
          <p>June 1997</p>
        </li>
      </StyledList>
    </StyledMain>
  );
}
