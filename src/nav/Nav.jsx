import { Link } from "react-scroll"
import "./Nav.css"

export default function Nav() {
    return (
        <div id="nav">
            <div className="logo-wrapper">
                <h1>tmontobbio.dev</h1>
            </div>
            <div className="btn-wrapper">
                <Link className="nav-btn" to="home" spy={true} smooth={true} duration={700}>
                    <h3>Home</h3>
                </Link>
                <Link className="nav-btn" to="about" spy={true} smooth={true} duration={700}>
                    <h3>About</h3>
                </Link>
                <Link className="nav-btn" to="projects" spy={true} smooth={true} duration={700}>
                    <h3>Projects</h3>
                </Link>
                <Link className="nav-btn" to="contact" spy={true} smooth={true} duration={700}>
                    <h3>Contact</h3>
                </Link>
            </div>
        </div>
    )
}