import React from 'react'

const About__Experience_item = ({ id, persent, skils, sourcePeactic }) => {
    return (
        <div id={id} className="bg-gray-700 bg-opacity-50 p-6 rounded-lg">
            <h4 className="text-indigo-400 mb-1">{persent}</h4>
            <h5 className="text-xl font-bold mb-2">{skils}</h5>
            <p className="text-gray-400">{sourcePeactic}</p>
        </div>
    )
}

export default About__Experience_item