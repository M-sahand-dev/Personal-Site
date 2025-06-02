import React, { useState } from 'react';
import Testimonials__Title from './Testimonials__Title';
import Testimonials__Comand_User from './Testimonials__Comand_User';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            image: 'https://www.course-api.com/images/people/person-1.jpeg',
            name: 'susan smith',
            revioe: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
            education: "CEO, Tech Solutions Inc."
        },
        {
            image: 'https://www.course-api.com/images/people/person-2.jpeg',
            name: 'anna johnson',
            revioe: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
            education: "CEO, Tech Solutions Inc."
        },
        {
            image: 'https://www.course-api.com/images/people/person-4.jpeg',
            name: 'peter jones',
            revioe: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
            education: "CEO, Tech Solutions Inc."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-6">
                <Testimonials__Title />

                <div className="relative">
                    {/* Testimonial */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <Testimonials__Comand_User
                                        image={testimonial.image}
                                        name={testimonial.name}
                                        revioe={testimonial.revioe}
                                        education={testimonial.education}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* controls */}
                    <button
                        onClick={prevSlide}
                        className="testimonial-prev absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-indigo-400 hover:text-white hover:bg-indigo-600 transition cursor-pointer"
                    >
                        <FaChevronLeft />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="testimonial-next absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-indigo-400 hover:text-white hover:bg-indigo-600 transition cursor-pointer"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;