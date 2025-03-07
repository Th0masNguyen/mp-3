import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import BodyWrapper from "./components/ui-components/BodyWrapper.tsx";
import MainNavContainer from "./components/ui-components/MainNavContainer.tsx";

import Achievements from "./components/main-content/Achievements.tsx";
import Education from "./components/main-content/Education.tsx";
import Experiences from "./components/main-content/Experiences.tsx";
import Home from "./components/main-content/Home.tsx";
import Projects from "./components/main-content/Projects.tsx";
import Skills from "./components/main-content/Skills.tsx";

import {
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router";

function Root() {
  return (
    <>
      <BodyWrapper>
        <Header />
        <MainNavContainer>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </MainNavContainer>
        <Footer />
      </BodyWrapper>
    </>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);
export default function App() {
  return <RouterProvider router={router} />;
}
