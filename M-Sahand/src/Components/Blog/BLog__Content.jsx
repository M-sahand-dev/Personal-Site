import React from 'react'
import Blog__Post from './Blog__Post'

const BLog__Content = ({ blogPost }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPost.map((item) => (
                <Blog__Post key={item.id} {...item} />
            ))}
        </div>
    )
}

export default BLog__Content