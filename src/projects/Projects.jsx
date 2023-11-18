import Project from "./project/Project.jsx"

import montobbioDesign from "../img/montobbio-design.png"
import julianCLogo from "../img/julianc-logo.png"
import movieHunter from "../img/movie-hunter.png"
import dogIm from "../img/dogim.jpg"

import "../App.css"

export default function Projects() {
    const sites = [
        {
            title: "Montobbio Design",
            img: montobbioDesign,
            description: "The very website you're visiting now! I built this site as a portfolio to showcase my work.  I wanted to keep it simple and fun, so there's no frills, however I hope it shows how I've learned to structure my work over time.",
            url: "https://tmontobbio.dev/"
        },
        {
            title: "Julian C Art",
            img: julianCLogo,
            description: "A lightweight art portfolio (still in progress) for an artist friend of mine.  Future features will include a merch store.  I had a lot of fun learning how to stylize the gallery and include loading content on scroll.",
            url: "https://julianc.tmontobbio.dev/"
        },
        {
            title: "Movie Hunter",
            img: movieHunter,
            description: "My capstone project from Flatiron School.  I built this full stack project using Ruby on Rails, and React frameworks.  It fetches from OMDB API, impliments user authentication and cookies, allows you to save favorite movies and follow other peoples favorites.",
            url: "https://moviehunter.tmontobbio.dev/"
        },
        {
            title: "DogIM",
            img: dogIm,
            description: "A fun dog themed Instant messenger clone I built also while attending Flatiron School.  This project was my first full-stack web app, future features will include websockets for instant updates to messages.  Currently functions like a forum, requiring a refresh to see changes.",
            url: "https://dogim.tmontobbio.dev/"
        },
    ]

    return (
        <div id="projects">
            <div className="container">
                <h3>PORTFOLIO</h3>
                <h4>Each of my projects showcases a different aspect of my ability 🛠️</h4>
                {sites.map((s) => {
                    return (
                        <Project key={s.title} title={s.title} img={s.img} description={s.description} url={s.url} />
                    )
                })}
            </div>
        </div>
    )
}