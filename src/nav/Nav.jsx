import "../App.css"

export default function Nav() {
    return (
        <div id="nav">
            <div className="logo-wrapper">
                <h1>tmontobbio.dev</h1>
            </div>
            <div className="btn-wrapper">
                <a href="#top">
                    <h3 className="nav-btn btn">Home</h3>
                </a>
                <a href="#about">
                    <h3 className="nav-btn btn">About</h3>
                </a>
                <a href="#projects">
                    <h3 className="nav-btn btn">Projects</h3>
                </a>
                <a href="#contact">
                    <h3 className="nav-btn btn">Contact</h3>
                </a>
            </div>
        </div >
    )
}