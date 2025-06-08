import React from 'react'

// Section title component used in the "About Me" section
const About_Title = () => {
    return (
        <div className="text-center mb-16">
            {/* Subtitle text */}
            <h4 className="text-indigo-400 text-lg mb-2">About Me</h4>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Know Me More
            </h2>

            {/* Decorative underline */}
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
    )
}

export default About_Title
