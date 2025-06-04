import React from 'react'

// Import icons
import { FaPalette } from "react-icons/fa"
import { FaCode } from "react-icons/fa6"

import Card_Container from './Services__Card_Container'
import Card from './Services__Card'

// Services section showcasing main skills/services offered
const Services = () => {
  return (
    <div id="services" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h4 className="text-indigo-400 text-lg mb-2">What I Do?</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How I Can Help Your Next Project
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Services cards wrapper */}
        <Card_Container>
          <Card
            id={1}
            icon={<FaPalette />}
            skil={"UI/UX Design"}
            poraghraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id."
            }
          />
          <Card
            id={2}
            icon={<FaCode />}
            skil={"Web Development"}
            poraghraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id."
            }
          />
          <Card
            id={3}
            icon={<FaPalette />}
            skil={"UI/UX Design"}
            poraghraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id."
            }
          />
        </Card_Container>
      </div>
    </div>
  )
}

export default Services
