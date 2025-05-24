import React from 'react'
import Navigatio from './Navigatio'
import Navigation_Mobile_Menu from './Navigation_Mobile_Menu'


const Header = ({ dataMenu }) => {


    return (
        <header className="fixed w-full z-40 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-sm">
            {/* Navbar */}
            <div className="container mx-auto px-6 py-4">
                {/* Navigation menu For tablet & desktop */}
                <Navigator dataMenu={dataMenu} />
                {/* Navigation Mobile Menu */}
                <Navigation_Mobile_Menu dataMenu={dataMenu} />
            </div>
        </header>
    )
}

export default Header