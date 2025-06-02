import React from 'react'
import { useState } from 'react';

// import icon 
import { FaPalette } from "react-icons/fa";
import { FaCode, FaMobileScreenButton } from "react-icons/fa6";

// for test
const services = [
  {
    id: 1,
    icon: <FaPalette />,
    skil: "UI/UX Design",
    poraghraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id."
  },
  {
    id: 2,
    icon: <FaCode />,
    skil: "Web Development",
    poraghraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id."
  },
  {
    id: 3,
    icon: <FaPalette />,
    skil: "UI/UX Design",
    poraghraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id."
  },
]

const Services = () => {
  const [servic, setServic] = useState(services)
  return (
    <div id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-indigo-400 text-lg mb-2">What I Do?</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Can
            Help Your Next Project</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servic.map((item) => {
            return (
              <div key={item.id} className="bg-gray-800 p-8 rounded-lg hover:bg-indigo-600 transition duration-300 group">
                <div className="text-indigo-400 group-hover:text-white text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white">{item.skil}</h3>
                <p className="text-gray-400 group-hover:text-gray-200"> {item.poraghraph} </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services