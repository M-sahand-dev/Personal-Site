import React from 'react'

// Container for rendering category filter buttons or tags in a centered, wrapped layout
const Categoris_Container = ({ children }) => {
    return (
        <div className="flex justify-center mb-12">
            {/* Inner wrapper for responsive and flexible child elements */}
            <div className="inline-flex flex-wrap justify-center gap-2">
                {children}
            </div>
        </div>
    )
}

export default Categoris_Container
