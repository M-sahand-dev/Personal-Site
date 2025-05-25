import React from 'react'
import About_Education_Item from './About_Education_Item'

const About_Education = ({ education }) => {
    return (
        <div className="md:w-1/2 md:pl-6">
            <h3 className="text-2xl font-bold mb-6">My
                Education</h3>

            <div className="space-y-6">
                {education.map((item) => <About_Education_Item key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default About_Education