import "./App.css";
import me1 from "./assets/me1.jpg";

function App() {
  return (
    <div id="app">
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
    </div>
  );
}

export default App;
