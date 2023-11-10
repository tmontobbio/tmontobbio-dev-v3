import me1 from "./assets/me1.jpg";
import './App.css'

function App() {
  const galleryContainer = document.querySelector(".gallery");
  const galleryItems = galleryContainer?.querySelectorAll(".gallery-item");
  // const indicator = document.querySelector(".indicator");

  const defaultItemFlex = "0 1 20px";
  const hoverItemFlex = "1 1 400px";

  const updateGalleryItems = () => {
    galleryItems?.forEach((item) => {
      let flex = defaultItemFlex;

      if (item.isHovered) {
        flex = hoverItemFlex;
      }

      item.style.flex = flex;
    });
  }

  galleryItems[0].isHovered = true;
  updateGalleryItems();


  return (
    <>
      <div className="container">
        <div className="indicator">
          <div className="gallery">
            <div className="gallery-item">
              <img src={me1} alt="me1" />
            </div>
            <div className="gallery-item">
              <img src={me1} alt="me1" />
            </div>
            <div className="gallery-item">
              <img src={me1} alt="me1" />
            </div>
            <div className="gallery-item">
              <img src={me1} alt="me1" />
            </div>
            <div className="gallery-item">
              <img src={me1} alt="me1" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
