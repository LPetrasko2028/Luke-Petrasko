import { useState } from 'react'
import './App.css'
import Banner from './Banner.jsx'
import { Routes, Route} from "react-router-dom"
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

function App() {

  return (
    <>
      <Banner/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
