import "../App.css"

export default function About() {
    return (
        <div id='about' className="container">
            <h3>about me</h3>
            <div id="laptop">
                <img id="laptop-img" />
                <img src="/web-dev.svg" id="web-dev" />
            </div>
            <div id="about-txt" >
                <h4>A highly motivated Developer from the Bay Area 📍</h4>
                <p>As a Junior Full-Stack Developer, I possess an impressive arsenal of skills in JavaScript, React, Ruby, Rails, HTML, CSS, . I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
            </div>
        </div>
    )
}