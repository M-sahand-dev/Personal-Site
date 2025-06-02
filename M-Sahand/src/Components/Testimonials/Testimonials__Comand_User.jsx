import React from 'react'

const Testimonials__Comand_User = ({ image, name, revioe, education }) => {
    return (
        <div className="testimonial-slide bg-gray-800 p-8 rounded-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                    <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover border-4 border-indigo-600" />
                </div>
                <div className="md:w-2/3 md:pl-8">
                    <p className="text-gray-300 italic mb-4">{revioe}</p>
                    <h4 className="font-bold">{name}</h4>
                    <p className="text-gray-400">{education}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials__Comand_User