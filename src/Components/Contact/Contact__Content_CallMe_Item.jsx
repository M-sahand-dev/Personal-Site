import React from 'react'

const Contact__Content_CallMe_Item = ({ icon, title, description }) => {
    return (
        // Single contact info item: icon with title and description
        <div className="flex items-start">
            {/* Icon section */}
            <div className="text-indigo-400 text-xl mr-4 mt-1">
                {icon}
            </div>
            {/* Text content: title and description */}
            <div>
                <h4 className="font-bold mb-1">{title}</h4>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    )
}

export default Contact__Content_CallMe_Item
