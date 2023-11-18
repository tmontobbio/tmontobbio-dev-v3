import { useState } from 'react'

import Nav from './nav/Nav.jsx'
import Home from "./home/Home.jsx"
import About from "./about/About.jsx"
import Projects from "./projects/Projects.jsx"
import Contact from "./contact/Contact.jsx"

import './App.css'

function App() {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
