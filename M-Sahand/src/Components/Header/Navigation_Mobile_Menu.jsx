import React from 'react'

const Navigation_Mobile_Menu = ({ dataMenu }) => {
    return (
        <div id="mobile-menu" className="hidden md:hidden bg-gray-800 py-4 px-6">
            <div className="flex flex-col space-y-4">
                {dataMenu.map((item) => (<a key={item.id} href={item.href} className={item.classStyleMobile}>{item.title}</a>))}
            </div>
        </div>
    )
}

export default Navigation_Mobile_Menu