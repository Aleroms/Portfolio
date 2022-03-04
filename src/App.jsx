import React, { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Work from "./components/works/Work";
import Testimonial from "./components/testimonials/Testimonials";
import Menu from "./components/Menu/Menu";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro />
       <Portfolio/>
       <Work/>
       <Testimonial/>
       <Contact/>
       
     </div>
    </div>
  );
}

export default App;
