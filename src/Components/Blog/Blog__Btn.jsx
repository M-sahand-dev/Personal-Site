import React from 'react'

const Blog__Btn = () => {
    return (
        // Centered button to navigate users to view all blog posts
        <div className="text-center mt-12">
            <a
                href="#"
                className="inline-block border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-md transition duration-300"
            >
                View All Posts
            </a>
        </div>
    )
}

export default Blog__Btn
