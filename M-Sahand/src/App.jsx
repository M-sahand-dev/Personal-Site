
import './App.css'

//Import Components 
import PreLoader from './Components/PreLoader'
import Header from './Components/Header/Header'

function App() {
  return (
    <>
      {/* Preloader */}
      <PreLoader />

      <div className="px-8">
        {/* Header/Navbar  */}
        <Header/>
      </div>
    </>
  )
}

export default App
