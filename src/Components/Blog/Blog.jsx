import React, { useState } from 'react';

// Component imports
import Blog__Btn from './Blog__Btn';
import Blog__Title from './Blog__Title';
import BLog__Content from './BLog__Content';

// Blog data
import data from "../../data/blog";

const Blog = () => {
    // Initialize blog post state with static data
    const [blogPost, setBlogPost] = useState(data);

    return (
        <div id="blog" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">

                {/* Section Title */}
                <Blog__Title />

                {/* Blog Post List */}
                <BLog__Content blogPost={blogPost} />

                {/* "View All Posts" Button */}
                <Blog__Btn />

            </div>
        </div>
    );
};

export default Blog;
