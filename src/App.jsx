import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import FrontPage from "./FrontPage";
import ContactMe from "./ContactMe";
import Projects from "./Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <FrontPage />
      <About />
      <Projects />
      <ContactMe />
    </div>
  );
};
export default App;
