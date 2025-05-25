import React from 'react'

const Info = ({ id, name, Info, Info2, }) => {
    return (
        <div id={id} className="md:w-2/3 md:pr-10 mb-10 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">
                I'm
                <span className="text-indigo-400"> {name}</span>
                , a Web Developer
            </h3>
            <p className="text-gray-400 mb-4">{Info}</p>
            <p className="text-gray-400">{Info2}</p>
        </div>
    )
}

export default Info