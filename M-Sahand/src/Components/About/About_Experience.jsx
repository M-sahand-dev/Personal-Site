import React from 'react'
import About__Experience_item from './About__Experience_item'


const About_Experience = ({ experience }) => {
    return (
        <div className="md:w-1/2 md:pr-6 mb-10 md:mb-0">
            <h3 className="text-2xl font-bold mb-6">My Experience</h3>
            {/* Experience item */}
            <div className="space-y-6">
                {experience.map((item) => <About__Experience_item key={item.id} {...item}/>)}
            </div>
        </div>
    )
}

export default About_Experience