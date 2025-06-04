import React from 'react'

// Introductory info block in the "About Me" section
const Info = ({ id, name, Info, Info2 }) => {
    return (
        <div id={id} className="md:w-2/3 md:pr-10 mb-10 md:mb-0">
            {/* Intro heading with name highlight */}
            <h3 className="text-2xl font-bold mb-4">
                I'm
                <span className="text-indigo-400"> {name}</span>
                , a Web Developer
            </h3>

            {/* First paragraph of description */}
            <p className="text-gray-400 mb-4">{Info}</p>

            {/* Additional details */}
            <p className="text-gray-400">{Info2}</p>
        </div>
    )
}

export default Info
