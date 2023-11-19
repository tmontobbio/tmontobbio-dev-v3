import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

import "../App.css"

export default function Contact() {
    return (
        <div id="contact">
            <div id="contact-title">
                <h3>CONTACT</h3>
                <h4>Don&apos;t be shy, hit me up! 👇</h4>
            </div>
            <div id="contact-icons">
                <div className="icon-box">
                    <span>
                        <AiOutlineHome className="icon lower-icon" color="#147efb" />
                    </span>
                    <div className="contact-info">
                        <h5>Location</h5>
                        <p>San Francisco</p>
                    </div>
                </div>
                <div className="icon-box">
                    <span>
                        <a href="mailto:tylermontobbio@gmail.com" target="_blank" rel="noreferrer">
                            <BiLogoGmail className="icon lower-icon" color="#147efb" />
                        </a>
                    </span>
                    <div className="contact-info">
                        <h5>Mail</h5>
                        <p>tylermontobbio@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}