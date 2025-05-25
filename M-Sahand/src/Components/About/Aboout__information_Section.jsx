import React from 'react'

const Aboout__information_Section = ({ id, classStyle, name, email, age, from }) => {
    return (
        <div className="md:w-1/3">
            <ul id={id} className="space-y-2">
                <li className={classStyle}>
                    <span className="text-gray-400">Name:</span>
                    <span className="font-medium">{name}</span>

                </li>
                <li className={classStyle}>
                    <span className="text-gray-400">Email:</span>
                    <span className="font-medium text-indigo-400">{email}</span>

                </li>
                <li className={classStyle}>
                    <span className="text-gray-400">Age:</span>
                    <span className="font-medium">{age}</span>

                </li>
                <li className={classStyle}>
                    <span className="text-gray-400">From:</span>
                    <span className="font-medium">{from}</span>
                </li>
            </ul>
            <div className="mt-6">
                <a href="#"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition duration-300 inline-block">Download CV</a>
            </div>
        </div>
    )
}

export default Aboout__information_Section