import React from 'react'

const About_Education_Item = ({ id, years, education, univesity }) => {
    return (
        <div id={id} className="bg-gray-700 bg-opacity-50 p-6 rounded-lg">
            <h4 className="text-indigo-400 mb-1">{years}</h4>
            <h5 className="text-xl font-bold mb-2">{education}</h5>
            <p className="text-gray-400">{univesity}</p>
        </div>
    )
}

export default About_Education_Item