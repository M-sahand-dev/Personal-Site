import React from 'react';
import Testimonials__Title from './Testimonials__Title';
import Testimonials__Comand_User from './Testimonials__Comand_User';
import Controls from './Testimonials__Controls';

// Swiper dependencies for slider functionality
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Swiper core styles
import 'swiper/css';
import 'swiper/css/navigation';

/**
 * Testimonials section component.
 * Displays a Swiper slider with client reviews and navigation controls.
 */
const Testimonials = () => {
    // Static list of testimonial data
    const testimonials = [
        {
            image: 'https://www.course-api.com/images/people/person-1.jpeg',
            name: 'Susan Smith',
            revioe: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out...",
            education: "CEO, Tech Solutions Inc."
        },
        {
            image: 'https://www.course-api.com/images/people/person-2.jpeg',
            name: 'Anna Johnson',
            revioe: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out...",
            education: "Marketing Director, Brandify Co."
        },
        {
            image: 'https://www.course-api.com/images/people/person-4.jpeg',
            name: 'Peter Jones',
            revioe: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out...",
            education: "Lead Developer, CodeCraft LLC"
        }
    ];

    return (
        <section id="testimonials" className="py-20 relative">
            <div className="container mx-auto px-6 relative">
                {/* Section title */}
                <Testimonials__Title />

                {/* Swiper slider for testimonials */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.testimonial-next',
                        prevEl: '.testimonial-prev',
                    }}
                    loop={true}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <Testimonials__Comand_User
                                image={testimonial.image}
                                name={testimonial.name}
                                revioe={testimonial.revioe}
                                education={testimonial.education}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation controls */}
                <Controls
                    icon={<FaChevronLeft />}
                    direction="left-0"
                    testimonial="testimonial-prev"
                    aria="Previous testimonial"
                />
                <Controls
                    icon={<FaChevronRight />}
                    direction="right-0"
                    testimonial="testimonial-next"
                    aria="Next testimonial"
                />
            </div>
        </section>
    );
};

export default Testimonials;
