import React from 'react'

/**
 * Renders a single portfolio item with hover effect.
 * Shows an image, and on hover, displays title, description, and a link.
 * 
 * Props:
 * - id: unique identifier for the item
 * - title: project title
 * - description: short description of the project
 * - Image: image URL for the portfolio preview
 */
const Portforio_Item = ({ id, title, description, Image }) => {
    return (
        <div id={id} className="portfolio-item group">
            {/* Portfolio Image Container */}
            <div className="relative overflow-hidden rounded-lg">

                {/* Portfolio Image */}
                <img
                    src={Image}
                    alt={title}
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-indigo-600 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="text-center p-4">

                        {/* Project Title */}
                        <h3 className="text-xl font-bold mb-2">{title}</h3>

                        {/* Project Description */}
                        <p className="mb-4">{description}</p>

                        {/* View Project Button */}
                        <a
                            href="#"
                            className="inline-block border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-indigo-600 transition"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portforio_Item
