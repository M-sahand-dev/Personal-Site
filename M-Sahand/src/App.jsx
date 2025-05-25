import { useState } from 'react'
import './App.css'

//Import Components 
import PreLoader from './Components/PreLoader'
import Header from './Components/Header/Header'

// Import Data
import dataMenu from './data/Navigation__Menu'

function App() {
  const [navMenu, setNavMenu] = useState(dataMenu)
  return (
    <>
      {/* Preloader */}
      <PreLoader />

      <div className="">
        {/* Header/Navbar  */}
        <Header dataMenu={navMenu} />
      </div>
    </>
  )
}

export default App
