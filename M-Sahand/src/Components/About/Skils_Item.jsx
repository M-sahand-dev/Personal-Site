import React from 'react'
import { motion } from 'framer-motion'

// Displays a list of technical skills with animated progress bars
const Skils_Item = ({ skills }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((item) => (
                <div key={item.id}>
                    {/* Skill name and percentage */}
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{item.skill}</span>
                        <span className="text-gray-300">{item.graid}%</span>
                    </div>

                    {/* Background progress bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2">
                        {/* Animated foreground bar */}
                        <motion.div
                            className="bg-indigo-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${item.graid}%` }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                                delay: item.id * 0.2, // stagger animation by item id
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Skils_Item
