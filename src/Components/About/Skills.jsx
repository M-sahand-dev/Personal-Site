import React from 'react'
import Language__Skils from './Language__Skils'
import Skils_Item from './Skils_Item'

// Main container for both technical and language skills
const Skills = ({ skills, language }) => {
    return (
        <div className="mt-20">
            {/* Section heading: technical skills */}
            <h3 className="text-2xl font-bold mb-8 text-center">My Skills</h3>

            {/* Renders list of technical skills */}
            <Skils_Item skills={skills} />

            {/* Section heading: language skills */}
            <h3 className="text-2xl font-bold mt-8 mb-8 text-center">Language Skills</h3>

            {/* Renders list of language skills with animated bars */}
            <Language__Skils language={language} />
        </div>
    )
}

export default Skills
