import React from 'react'
import { useState } from 'react';
import Blog__Btn from './Blog__Btn'
import Blog__Title from './Blog__Title'
import BLog__Content from './BLog__Content';


import data from "../../data/blog"





const Blog = () => {
    const [blogPost, setBlogPost] = useState(data)

    return (
        <div id="blog" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                {/* Blog Title */}
                <Blog__Title />

                {/* Blog Content*/}
                <BLog__Content blogPost={blogPost} />

                {/* View All Posts */}
                <Blog__Btn />
            </div>
        </div>
    )
}

export default Blog