import React from 'react'
import { useState } from 'react'
import Navigatio from './Navigatio'
import Navigation_Mobile_Menu from './Navigation_Mobile_Menu'


const Header = ({ dataMenu }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed w-full z-40 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-sm">
            {/* Navbar */}
            <div className="container mx-auto px-8 py-4">
                {/* Navigation menu For tablet & desktop */}
                <Navigatio dataMenu={dataMenu} onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                {/* Navigation Mobile Menu */}
                <Navigation_Mobile_Menu dataMenu={dataMenu} isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            </div>
        </header>
    )
}

export default Header