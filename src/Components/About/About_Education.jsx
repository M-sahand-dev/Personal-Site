import React from 'react'
import About_Education_Item from './About_Education_Item'

// Renders the list of education entries in the "About" section
const About_Education = ({ education }) => {
    return (
        <div className="md:w-1/2 md:pl-6">
            {/* Section heading */}
            <h3 className="text-2xl font-bold mb-6">My Education</h3>

            {/* Education list */}
            <div className="space-y-6">
                {education.map((item) => (
                    // Each item renders a single education entry
                    <About_Education_Item key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default About_Education
