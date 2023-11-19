// import Project from "./project/Project.jsx"

import { FiGithub } from "react-icons/fi";

import montobbioDesign from "../img/montobbio-design.png"
// import julianCLogo from "../img/julianc-logo.png"
// import movieHunter from "../img/movie-hunter.png"
// import dogIm from "../img/dogim.jpg"

import "../App.css"

export default function Projects() {

    return (
        <div id="projects">
            <div className="container">
                <h3>PORTFOLIO</h3>
                <h4>Each of my projects showcases a different aspect of my ability 🛠️</h4>
                {/* {sites.map((s) => {
                    return (
                        <Project key={s.title} title={s.title} img={s.img} description={s.description} url={s.url} />
                    )
                })} */}

                <div className="project">
                    <a href="https://tmontobbio.dev/" target="_blank" rel="noreferrer">
                        <img src={montobbioDesign} alt="montobbio design thumbnail" />
                    </a>
                    <div className="txt-wrapper">
                        <span>
                            <h5>Montobbio Design</h5>
                            <p>(2023)</p>
                        </span>
                        <p>The very website you&apos;re visiting now! I built this site as a portfolio to showcase my work.  I wanted to keep it simple and fun, so there&apos;s no frills, however I hope it shows how I&apos;ve learned to structure my work over time.</p>
                        <div className="links">
                            <a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer">
                                <div className="btn-container project-btn btn">
                                    Code
                                    <FiGithub className="icon" />
                                </div>
                            </a>
                            <a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer">
                                <div className="btn-container project-btn btn">
                                    Code
                                    <FiGithub className="icon" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project project-reversed">
                    <a href="https://tmontobbio.dev/" target="_blank" rel="noreferrer">
                        <img src={montobbioDesign} alt="montobbio design thumbnail" />
                    </a>
                    <div className="txt-wrapper">
                        <span>
                            <h5>Montobbio Design</h5>
                            <p>(2023)</p>
                        </span>
                        <p>The very website you&apos;re visiting now! I built this site as a portfolio to showcase my work.  I wanted to keep it simple and fun, so there&apos;s no frills, however I hope it shows how I&apos;ve learned to structure my work over time.</p>
                        <div className="links">
                            <a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer">
                                <div className="btn-container project-btn btn">
                                    Code
                                    <FiGithub className="icon" />
                                </div>
                            </a>
                            <a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer">
                                <div className="btn-container project-btn btn">
                                    Code
                                    <FiGithub className="icon" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <a href="https://tmontobbio.dev/" target="_blank" rel="noreferrer">
                        <img src={montobbioDesign} alt="montobbio design thumbnail" />
                    </a>
                    <div className="txt-wrapper">
                        <span>
                            <h5>Montobbio Design</h5>
                            <p>(2023)</p>
                        </span>
                        <p>The very website you&apos;re visiting now! I built this site as a portfolio to showcase my work.  I wanted to keep it simple and fun, so there&apos;s no frills, however I hope it shows how I&apos;ve learned to structure my work over time.</p>
                        <div className="links">
                            <a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer">
                                <div className="btn-container project-btn btn">
                                    Code
                                    <FiGithub className="icon" />
                                </div>
                            </a>
                            <a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer">
                                <div className="btn-container project-btn btn">
                                    Code
                                    <FiGithub className="icon" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project project-reversed">
                    <a href="https://tmontobbio.dev/" target="_blank" rel="noreferrer">
                        <img src={montobbioDesign} alt="montobbio design thumbnail" />
                    </a>
                    <div className="txt-wrapper">
                        <span>
                            <h5>Montobbio Design</h5>
                            <p>(2023)</p>
                        </span>
                        <p>The very website you&apos;re visiting now! I built this site as a portfolio to showcase my work.  I wanted to keep it simple and fun, so there&apos;s no frills, however I hope it shows how I&apos;ve learned to structure my work over time.</p>
                        <div className="links">
                            <a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer">
                                <div className="btn-container project-btn btn">
                                    Code
                                    <FiGithub className="icon" />
                                </div>
                            </a>
                            <a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer">
                                <div className="btn-container project-btn btn">
                                    Code
                                    <FiGithub className="icon" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}