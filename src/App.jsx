import { useState } from 'react'
import './App.css'
import Banner from './Banner.jsx'
import { Routes, Route} from "react-router-dom"
import Home from './Home.jsx'
import About from './About.jsx'

function App() {

  return (
    <>
      <Banner/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
