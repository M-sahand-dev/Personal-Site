import React from 'react'

// Container to layout service cards in responsive grid
const Services__Card_Container = ({ children }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {children}
        </div>
    )
}

export default Services__Card_Container
