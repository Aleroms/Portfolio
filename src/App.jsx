import React from "react";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Work from "./components/works/Work";
import Testimonial from "./components/testimonials/Testimonials";
import "./app.scss";

function App() {
  return (
    <div className="app">
     <Topbar/>
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
