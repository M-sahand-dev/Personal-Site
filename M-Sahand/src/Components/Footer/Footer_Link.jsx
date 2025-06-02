import React from 'react'

const Footer_Link = ({ link, href }) => {
    return (
        <li>
            <a href={href} className="text-gray-400 hover:text-indigo-400 transition">{link}</a>
        </li>
    )
}

export default Footer_Link