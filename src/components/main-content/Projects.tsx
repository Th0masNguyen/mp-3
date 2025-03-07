import { styled } from "styled-components";
import Calc from "./Calc.tsx";
import StyledMain from "../ui-components/StyledMain";

export default function Projects() {
  return (
    <StyledMain>
      <h3>Projects</h3>

      <h4>Manhattan Project</h4>
      <p>
        I worked with my boy J. Robert Oppenheimer to ensure arms supremacy and
        get the win in ww2.
      </p>

      <h4>Project MKUltra</h4>
      <p>
        I conducted rigorous reseach in the service of national security. I did
        so while minimizing human rights abuses through maintaining
        confidentiality.
      </p>
      <Calc />
    </StyledMain>
  );
}
