import React from 'react'
import Portforio_Item from './Portforio_Item'

// Container component for displaying multiple portfolio items in a responsive grid
const Portfolio_Items_Container = ({ portforioItem }) => {
    return (
        // Responsive grid layout for portfolio items
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Render each portfolio item */}
            {portforioItem.map((item) => (
                <Portforio_Item key={item.id} {...item} />
            ))}
        </div>
    )
}

export default Portfolio_Items_Container
