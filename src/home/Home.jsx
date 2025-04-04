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
        <div id='home' className="container">
            <div id="greeting-img" />
            <div id="home-wrap">
                <span id="greeting-text">
                    <h1>Full-Stack Developer</h1>
                    <p>Hi I&apos;m Tyler, a passionate web developer from the San Francisco bay area.</p>
                </span>
                <div className="btn-container">
                    <p className="tech-stack-header">Tech Stack  | </p>
                    <JavaScript className="icon ts" />
                    <React className="icon ts" />
                    <Redux className="icon ts" />
                    <NodeJS className="icon ts" />
                    <Ruby className="icon ts" />
                    <Rails className="icon ts" />
                    <PostGreSQL className="icon ts" />
                </div>
                <div className="btn-container">
                    <a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer">
                        <FiGithub className="icon btn" />
                    </a>
                    <a href="https://www.linkedin.com/in/tmontobbio" target="_blank" rel="noreferrer">
                        <PiLinkedinLogoBold className="icon btn" />
                    </a>
                </div>
            </div>
        </div>
    )
}