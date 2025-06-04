import React from 'react'

// Represents a single experience item (e.g., job or project skill summary)
const About__Experience_item = ({ id, persent, skils, sourcePeactic }) => {
    return (
        <div id={id} className="bg-gray-700 bg-opacity-50 p-6 rounded-lg">
            {/* Experience duration or progress (e.g., "90%" or "3 Years") */}
            <h4 className="text-indigo-400 mb-1">{persent}</h4>

            {/* Skill or job title */}
            <h5 className="text-xl font-bold mb-2">{skils}</h5>

            {/* Description or source of practical experience */}
            <p className="text-gray-400">{sourcePeactic}</p>
        </div>
    )
}

export default About__Experience_item
