import { useState } from 'react'
import './App.css'

//Import Components 
import PreLoader from './Components/PreLoader'
import Header from './Components/Header/Header'
import Hero_Section from './Components/Hero_Section/Hero_Section'

// Import Data
import dataMenu from './data/Navigation__Menu'
import dataHeroMe from './data/Hero-me'

function App() {
  const [navMenu, setNavMenu] = useState(dataMenu)
  const [heroMe, setHeroMe] = useState(dataHeroMe)
  return (
    <>
      {/* Preloader */}
      <PreLoader />

      <div className="">
        {/* Header/Navbar  */}
        <Header dataMenu={navMenu} />
        {/* Hero Section */}
        <Hero_Section {...heroMe} />
      </div>
    </>
  )
}

export default App
