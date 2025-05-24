import React from 'react'
import Navigatio from './Navigatio'

const Header = () => {
    return (
        <header className="fixed w-full z-40 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-sm">
            {/* Navbar */}
            <div className="container mx-auto px-6 py-4">
                <Navigator />
            </div>
        </header>
    )
}

export default Header