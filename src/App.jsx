import './App.css'
import Nav from './nav/Nav.jsx'
import Home from "./home/Home.jsx"
import About from "./about/About.jsx"
import Projects from "./projects/Projects.jsx"
import Contact from "./contact/Contact.jsx"

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      {/* <Projects /> */}
      <Contact />
    </>
  )
}

export default App
