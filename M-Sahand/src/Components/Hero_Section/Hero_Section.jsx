import React from 'react'
import Hero_Section_Profile from './Hero_Section_Profile'

const Hero_Section = ({ id, name, family, skils, info, Image }) => {
    return (
        <section id={id}>
            <div className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-12 md:mb-0">
                    <h4 className="text-indigo-400 text-lg mb-2">Hello, I'm</h4>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        {name}

                        <span className="text-indigo-400"> {family}</span>
                    </h1>
                    <h3 className="text-xl md:text-2xl mb-6">{skils}</h3>
                    <p className="text-gray-400 mb-8 max-w-lg">{info}</p>
                    <div class="flex space-x-4">
                        <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition duration-300">Hire Me</a>
                        <a href="#" className="border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-md transition duration-300">Download CV</a>
                    </div>
                </div>

                {/* image profile */}
                <Hero_Section_Profile Image={Image}/>
            </div>
        </section>
    )
}

export default Hero_Section