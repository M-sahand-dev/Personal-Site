import React from 'react'

// Single service card displaying icon, skill title, and description
const Services__Card = ({ id, icon, skil, poraghraph }) => {
    return (
        <div
            key={id}
            className="bg-gray-800 p-8 rounded-lg hover:bg-indigo-600 transition duration-300 group"
        >
            {/* Icon with hover color change */}
            <div className="text-indigo-400 group-hover:text-white text-4xl mb-4">
                {icon}
            </div>

            {/* Skill title */}
            <h3 className="text-xl font-bold mb-3 group-hover:text-white">{skil}</h3>

            {/* Skill description */}
            <p className="text-gray-400 group-hover:text-gray-200">{poraghraph}</p>
        </div>
    )
}

export default Services__Card
