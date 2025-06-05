import React from 'react'

/**
 * Section title component for the Testimonials block.
 * Displays a heading and decorative divider, styled with Tailwind CSS.
 */
const Testimonials__Title = () => {
    return (
        <div className="text-center mb-16">
            {/* Subtitle */}
            <h4 className="text-indigo-400 text-lg mb-2">Client Speak</h4>

            {/* Main title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Some of My Clients Say
            </h2>

            {/* Decorative divider */}
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
    )
}

export default Testimonials__Title
