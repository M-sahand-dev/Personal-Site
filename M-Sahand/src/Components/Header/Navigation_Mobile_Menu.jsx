import React from 'react'

const Navigation_Mobile_Menu = ({ dataMenu, isOpen, onClose }) => {
    return (
        <div id="mobile-menu" className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-800 py-4 px-6`}>
            <div className="flex flex-col space-y-4">
                {dataMenu.map((item) => (<a key={item.id} href={item.href} className={item.classStyleMobile} onClick={onClose}>{item.title}</a>))}
            </div>
        </div>
    )
}

export default Navigation_Mobile_Menu