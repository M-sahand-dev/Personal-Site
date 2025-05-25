import React from 'react'
import Info from './Info'
import Aboout__information_Section from './Aboout__information_Section'
import About_Experience from './About_Experience'
import About_Education from './About_Education'

const About = ({ info, information, education, experience }) => {
  return (
    <div id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-indigo-400 text-lg mb-2">About Me</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Know Me
            More</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row">
          {info.map((item) => (<Info key={item.id} {...item} />))}
          {information.map((item) => <Aboout__information_Section key={item.id} {...item} />)}
        </div>
        {/*  Experience/Education Tabs  */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row">
            <About_Experience experience={experience} />
            <About_Education education={education} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About