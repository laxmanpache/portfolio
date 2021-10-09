
import React from "react";
import './App.css';
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Skill from "./Skill/Skill";

import Contact from "./Contact/Contact";

function App() {
  return (
    <div >
     <Navbar />
     <Home />
     <About />
     <Skill />
   
     <Contact />
    </div>
  );
}

export default App;
