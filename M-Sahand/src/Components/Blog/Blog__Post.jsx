import React from 'react'
import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

const Blog__Post = ({ id, image, lengthComments, date, title, content }) => {
    return (
        // Single blog post card with image, meta info, title, excerpt, and read more link
        <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
            <a href="#">
                {/* Post thumbnail */}
                <img src={image} alt={title} className="w-full h-48 object-cover" />
            </a>
            <div className="p-6">
                {/* Post metadata: date and comment count */}
                <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1" >
                        <FaRegCalendarAlt className='mr-1' />
                        {date}
                    </span >
                    <span className="mx-2"> | </span>
                    <span className="flex items-center gap-1">
                        <FaComments className='mr-1' />
                        <span>{lengthComments}</span> Comments
                    </span>
                </div>
                {/* Post title */}
                <h3 className="text-xl font-bold mb-3 hover:text-indigo-400 transition">
                    <a href="#">{title}</a>
                </h3>
                {/* Post excerpt */}
                <p className="text-gray-400 mb-4">{content}</p>
                {/* Read more link */}
                <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center">
                    Read More
                    <FaArrowRight className='ml-2' />
                </a>
            </div>
        </div>
    )
}

export default Blog__Post
