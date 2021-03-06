import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
  

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">SM</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+1 (951) 376-9126</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>santiajm@uci.edu</span>
          </div>
        </div>
          <h1>Santiago Morales</h1>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
