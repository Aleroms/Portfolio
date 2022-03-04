import "./menu.scss"
import "../ListItem/ListItem";
import ListItem from "../ListItem/ListItem";

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <ListItem name="intro" text="Home" setMenuOpen={setMenuOpen}/>
            <ListItem name="portfolio" text="Portfolio" setMenuOpen={setMenuOpen}/>
            <ListItem name="works" text="Works" setMenuOpen={setMenuOpen}/>
            <ListItem name="testimonials" text="Testimonials" setMenuOpen={setMenuOpen}/>
            <ListItem name="contact" text="Contact" setMenuOpen={setMenuOpen}/>
        </ul>
    </div>
  )
}
