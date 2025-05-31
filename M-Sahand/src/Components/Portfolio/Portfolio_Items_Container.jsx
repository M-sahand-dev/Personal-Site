import React from 'react'
import Portforio_Item from './Portforio_Item'

const Portfolio_Items_Container = ({ portforioItem }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portforioItem.map((item) => <Portforio_Item key={item.id} {...item} />)}
        </div>
    )
}

export default Portfolio_Items_Container