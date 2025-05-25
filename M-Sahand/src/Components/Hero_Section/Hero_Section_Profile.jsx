import React from 'react'

const Hero_Section_Profile = ({ Image }) => {
    return (
        <div className="md:w-1/2 flex justify-center">
            <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-indigo-400 rounded-lg z-0"></div>
                <img
                    src={Image}
                    alt="Profile"
                    class="relative z-10 rounded-lg w-80 h-96 object-cover"></img>
            </div>
        </div>
    )
}

export default Hero_Section_Profile