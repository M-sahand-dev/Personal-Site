import React from 'react'

const Contact_Caontent_Link = ({ href, icon }) => {
    return (
        // Link button with icon and hover styles for contact methods
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition"
        >
            {icon}
        </a>
    )
}

export default Contact_Caontent_Link
