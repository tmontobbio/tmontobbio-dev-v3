import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi"

import JavaScript from "../img/javascript.svg?react";
import React from "../img/react.svg?react";
import Redux from "../img/redux.svg?react";
import NodeJS from "../img/nodejs.svg?react";
import Ruby from "../img/ruby.svg?react";
import Rails from "../img/rails.svg?react";
import PostGreSQL from "../img/postgresql.svg?react";

import "../App.css"

export default function Home() {
    return (
        <div id="home">
            <div className="container">
                <div className="greeting">
                    <div className="greeting-text">
                        <h1>Full-Stack React Developer</h1>
                        <p>Hi I&apos;m Tyler, a passionate web developer from the San Francisco bay area.</p>
                        <div>
                            <a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer">
                                <FiGithub className="icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/tmontobbio" target="_blank" rel="noreferrer">
                                <PiLinkedinLogoBold className="icon" />
                            </a>
                        </div>
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
        </div>
    )
}