import { styled } from "styled-components";
import { Link } from "react-router";
const StyledFooter = styled.footer`
  padding: 2vh 1vw;
  background-color: rgb(255, 112, 112);
  font-size: calc(2px + 1.3vw);
`;
export default function Footer() {
  return (
    <StyledFooter>
      <p>
        All Rights Reserved by Thomas Nguyen <Link to="/credits">credits</Link>{" "}
        &#169;
      </p>
    </StyledFooter>
  );
}
