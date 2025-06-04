import React from 'react'

/**
 * Section title for the Portfolio section.
 * Includes subtitle and main heading with underline style.
 */
const PortForio__Title = () => {
    return (
        <div className="text-center mb-16">
            {/* Section subtitle */}
            <h4 className="text-indigo-400 text-lg mb-2">
                My Work
            </h4>

            {/* Main title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
            </h2>

            {/* Decorative underline */}
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
    )
}

export default PortForio__Title
