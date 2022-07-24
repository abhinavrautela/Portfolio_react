import React from "react";

import About from "./About";
import Navbar from "./Navbar";
import FrontPage from "./FrontPage";
import ContactMe from "./ContactMe";
const App = () => {
  return (
   <div>
       <Navbar />
       <FrontPage />
       <About />
       <ContactMe />
   </div>
  );
};
export default App;
