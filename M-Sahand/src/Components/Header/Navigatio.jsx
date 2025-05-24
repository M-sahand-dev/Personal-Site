import React from 'react'
import Navigation_Mobile_Menu_Btn from './Navigation_Mobile_Menu_Btn'


const Navigatio = ({ dataMenu }) => {
    return (
        <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-indigo-400">Foliox</a>
            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-8">
                {dataMenu.map((item) => (<a key={item.id} href={item.href} className={item.classStyle}>{item.title}</a>))}
            </nav>

            {/* Mobile Menu */}
            <Navigation_Mobile_Menu_Btn />
        </div>
    )
}

export default Navigatio