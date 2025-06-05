import React from 'react'

/**
 * Testimonials navigation button (left/right control).
 *
 * @param {string} direction - Tailwind class to position the button (e.g., "left-0", "right-0")
 * @param {JSX.Element} icon - Icon element (e.g., arrow icon)
 * @param {string} testimonial - Additional class for targeting this button (e.g., "prev", "next")
 * @param {string} aria - Accessible label for screen readers
 */
const Testimonials__Controls = ({ direction, icon, testimonial, aria }) => {
    return (
        <button
            className={`
                ${testimonial} absolute ${direction} top-1/2 -translate-y-1/2 z-10 
                bg-white rounded-full w-12 h-12 flex items-center justify-center 
                text-indigo-600 shadow-lg 
                hover:bg-indigo-600 hover:text-white 
                transition-all duration-300 
                hover:scale-110 active:scale-95 
                my-20 mx-8
            `}
            aria-label={aria} // improves accessibility
        >
            {icon}
        </button>
    );
}

export default Testimonials__Controls
