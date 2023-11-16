import "../../App.css"

export default function Project({ title, img, description, url }) {

    return (
        <div className="project">
            <a href={url} target="_blank" rel="noreferrer">
                <img src={img} alt={title + " thumbnail"} />
            </a>
            <div className="txt-wrapper">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}