import React from 'react'

const Skills = ({ skills, language }) => {
    return (
        <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-300">{item.skill}</span>
                                <span className="text-gray-300">{item.graid}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${item.graid}%` }}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h3 className="text-2xl font-bold mt-8 mb-8 text-center">Language Skills</h3>
            <div className="">
                <h4 className="text-center text-2xl mb-8 font-bold">English</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {language.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-300">{item.skill}</span>
                                    <span className="text-gray-300">{item.graid}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${item.graid}%` }}></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills