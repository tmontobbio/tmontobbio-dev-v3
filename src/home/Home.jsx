import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi"

import JavaScript from "/home/tyler/code/tmontobbio-dev-v3/public/javascript.svg?react";
import React from "/home/tyler/code/tmontobbio-dev-v3/public/react.svg?react";
import Redux from "/home/tyler/code/tmontobbio-dev-v3/public/redux.svg?react";
import NodeJS from "/home/tyler/code/tmontobbio-dev-v3/public/nodejs.svg?react";
import Ruby from "/home/tyler/code/tmontobbio-dev-v3/public/ruby.svg?react";
import Rails from "/home/tyler/code/tmontobbio-dev-v3/public/rails.svg?react";
import PostGreSQL from "/home/tyler/code/tmontobbio-dev-v3/public/postgresql.svg?react";

import "../App.css"

export default function Home() {
    return (
        <div id='home' className="container">
            <div id="greeting-img" />
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
    )
}