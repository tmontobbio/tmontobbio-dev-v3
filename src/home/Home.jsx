import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi"
import "./Home.css"

export default function Home() {
    return (
        <div id="home">
            <div className="greeting">
                <div className="greeting-text">
                    <h1>Full-Stack React Developer</h1>
                    <p>Hi I'm tyler, a passionate developer from the San Francisco bay area.</p>
                    <div><FiGithub className="icon" /><PiLinkedinLogoBold className="icon" /></div>
                </div>
                <div className="greeting-img" />
            </div>
        </div>
    )
}