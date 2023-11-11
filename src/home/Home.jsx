import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi"
import JavaScript from "../img/javascript.svg?react";
import NodeJS from "../img/nodejs.svg?react";
import PostGreSQL from "../img/postgresql.svg?react";
import Rails from "../img/rails.svg?react";
import React from "../img/react.svg?react";
import Redux from "../img/redux.svg?react";
import Ruby from "../img/ruby.svg?react";
import "./Home.css"

export default function Home() {
    return (
        <div id="home">
            <div className="greeting">
                <div className="greeting-text">
                    <h1>Full-Stack React Developer</h1>
                    <p>Hi I'm Tyler, a passionate web developer from the San Francisco bay area.</p>
                    <div><FiGithub className="icon" /><PiLinkedinLogoBold className="icon" /></div>
                    <div className="tech-stack">
                        <p className="tech-stack-header">Tech Stack  | </p>
                        <JavaScript className="icon" />
                        <React className="icon" />
                        <Redux className="icon" />
                        <NodeJS className="icon" />
                        <Ruby className="icon" />
                        <Rails className="icon" />
                        <PostGreSQL className="icon" />

                    </div>
                </div>
                <div className="greeting-img" />
            </div>
        </div>
    )
}