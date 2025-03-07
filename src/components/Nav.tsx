import { styled } from "styled-components";
import { Link } from "react-router";

const StyledNav = styled.nav`
  width: 30%;
  background-color: rgb(136, 211, 255);

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding: 1vh 0;
    justify-content: space-between;
  }

  li {
    padding: 3vh 0;
  }

  li:hover {
    background-color: rgb(74, 255, 255);
  }
  a {
    text-decoration: none;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    ul {
      flex-direction: row;
      padding: 1vh 1vw;
    }
    li {
      padding: 1vh 2vw;
    }
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/experiences">Experiences</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/achievements">Achievements</Link>
        </li>
      </ul>
    </StyledNav>
  );
}
