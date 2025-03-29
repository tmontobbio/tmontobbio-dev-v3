// import Project from "./project/Project.jsx"

import { FiGithub } from "react-icons/fi";

// import montobbioDesign from "../img/montobbio-design.png"
// import julianCLogo from "../img/julianc-logo.png"
// import movieHunter from "../img/movie-hunter.png"
// import dogIm from "../img/dogim.jpg"

import "../App.css"




export default function Projects() {

    return (
        <div id="projects">

            {/* {
                sites.map((s) => {
                    return (
                        <Project key={s.title} title={s.title} img={s.img} description={s.description} url={s.url} />
                    )
                })
            } */}

            <h3>PORTFOLIO</h3>
            <h4>Each of my projects showcases a different aspect of my abilities 🛠️</h4>

            <div className="project">
                <a href="https://tmontobbio.dev/" target="_blank" rel="noreferrer">
                    <div className='project-img' alt="montobbio design thumbnail" />
                </a>
                <div className="description">
                    <h5>tmontobbio.dev</h5>
                    <p>(2023)</p>
                    <p>The website you&apos;re visiting now! I built this site as a portfolio to showcase my work.  I wanted to keep it simple and fun, so there&apos;s no frills, however I hope it shows how I&apos;ve learned to structure my work over time.</p>
                    <a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer">
                        <FiGithub className="icon" />
                    </a>
                </div>
            </div>

            <div className="project">
                <a href="https://tmontobbio.dev/" target="_blank" rel="noreferrer">
                    <div className='project-img' alt="montobbio design thumbnail" />
                </a>
                <div className="description">
                    <h5>tmontobbio.dev</h5>
                    <p>(2023)</p>
                    <p>The website you&apos;re visiting now! I built this site as a portfolio to showcase my work.  I wanted to keep it simple and fun, so there&apos;s no frills, however I hope it shows how I&apos;ve learned to structure my work over time.</p>
                    <a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer">
                        <FiGithub className="icon" />
                    </a>
                </div>
            </div>

            <div className="project">
                <a href="https://tmontobbio.dev/" target="_blank" rel="noreferrer">
                    <div className='project-img' alt="montobbio design thumbnail" />
                </a>
                <div className="description">
                    <h5>tmontobbio.dev</h5>
                    <p>(2023)</p>
                    <p>The website you&apos;re visiting now! I built this site as a portfolio to showcase my work.  I wanted to keep it simple and fun, so there&apos;s no frills, however I hope it shows how I&apos;ve learned to structure my work over time.</p>
                    <a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer">
                        <FiGithub className="icon" />
                    </a>
                </div>
            </div>

        </div>
    )
}