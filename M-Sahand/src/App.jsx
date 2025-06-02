import { useState } from 'react'
import './App.css'

//Import Components 
import PreLoader from './Components/PreLoader'
import Header from './Components/Header/Header'
import Hero_Section from './Components/Hero_Section/Hero_Section'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'

// Import Data
import dataMenu from './data/Navigation__Menu'
import dataHeroMe from './data/Hero-me'
import dataAbout from './data/data_Info'

function App() {
  const [navMenu, setNavMenu] = useState(dataMenu)
  const [heroMe, setHeroMe] = useState(dataHeroMe)
  const [about, setAbout] = useState(dataAbout)


  return (
    <>
      {/* Preloader */}
      <PreLoader />
      <div className="">
        {/* Header/Navbar  */}
        <Header dataMenu={navMenu} />
        {/* Hero Section */}
        <Hero_Section {...heroMe} />
        {/* sectio About */}
        <About {...about} />
        {/* Services Section */}
        <Services />
        {/* Portfolio Section */}
        <Portfolio />
        {/* Testimonials Section */}
        <Testimonials />
        {/* Blog Section */}
        <Blog />
        {/* Contact Section */}
        <Contact />
        {/* Footer Section */}
        {/* Back to Top Button  */}
      </div>
    </>
  )
}

export default App
