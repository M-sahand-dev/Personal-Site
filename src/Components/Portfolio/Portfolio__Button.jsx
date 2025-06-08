import React from 'react'

// Button component linking to more portfolio projects
const Portfolio__Button = () => {
    return (
        <div className="text-center mt-12">
            {/* Styled link acting as a button */}
            <a
                href="#"
                className="inline-block border border-indigo-600 text-indigo-400 
                           hover:bg-indigo-600 hover:text-white 
                           px-6 py-3 rounded-md transition duration-300"
            >
                View More Projects
            </a>
        </div>
    )
}

export default Portfolio__Button
