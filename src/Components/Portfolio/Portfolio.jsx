import { useState } from 'react'
import Categoris_Container from './Categoris_Container'
import Portfolio_Items_Container from './Portfolio_Items_Container'
import Category from './Categoris'
import PortForio__Title from './PortForio__Title'
import Portfolio__Button from './Portfolio__Button'
// Import static portfolio data
import portForioData from '../../data/portforio'

const Portfolio = () => {
  // Local state for current filtered items
  const [portforioItem, setPortforioItem] = useState(portForioData)

  // Handle category filtering
  const filterItems = (category) => {
    console.log("Filtering by category:", category); // Debug: can be removed in production

    if (category === "all") {
      setPortforioItem(portForioData)
      return
    }

    // Filter portfolio data by category
    const newCategory = portForioData.filter((item) => item.category === category)
    setPortforioItem(newCategory)
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <PortForio__Title />

        {/* Filter Buttons */}
        <Categoris_Container>
          <Category onClick={() => filterItems("all")}>All</Category>
          <Category onClick={() => filterItems("Design")}>Design</Category>
          <Category onClick={() => filterItems("Development")}>Development</Category>
          <Category onClick={() => filterItems("Branding")}>Branding</Category>
        </Categoris_Container>

        {/* Filtered Portfolio Items */}
        <Portfolio_Items_Container portforioItem={portforioItem} />

        {/* Optional: Call-to-action button */}
        <Portfolio__Button />
      </div>
    </section>
  )
}

export default Portfolio
