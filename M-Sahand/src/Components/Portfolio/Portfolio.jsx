import { useState } from 'react'
import Categoris_Container from './Categoris_Container'
import Portfolio_Items_Container from './Portfolio_Items_Container'

// Import Data
import portForioData from '../../data/portforio'

const Portfolio = () => {
  const [portforioItem, setPortforioItem] = useState(portForioData)

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-indigo-400 text-lg mb-2">
            My Work
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        {/* Portfolio Filter */}
        <Categoris_Container />
        {/* Portfolio Items */}
        <Portfolio_Items_Container portforioItem={portforioItem} />
      </div>
    </section>
  )
}

export default Portfolio