import React from 'react'
import About__Experience_item from './About__Experience_item'

// Renders the list of work experiences in the "About" section
const About_Experience = ({ experience }) => {
    return (
        <div className="md:w-1/2 md:pr-6 mb-10 md:mb-0">
            {/* Section heading */}
            <h3 className="text-2xl font-bold mb-6">My Experience</h3>

            {/* Experience list */}
            <div className="space-y-6">
                {experience.map((item) => (
                    // Each item represents a job or skill experience block
                    <About__Experience_item key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default About_Experience
