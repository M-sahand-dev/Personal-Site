import React from 'react'

/**
 * Wrapper component for individual testimonial slide content.
 * 
 * Acts as a slide container in the testimonial slider.
 *
 * @param {React.ReactNode} children - The content of the testimonial (usually a testimonial card).
 */
const Testimonials__Slider_item = ({ children }) => {
    return (
        <div className="testimonial-slider relative">
            {/* Render the testimonial content passed as children */}
            {children}
        </div>
    )
}

export default Testimonials__Slider_item
