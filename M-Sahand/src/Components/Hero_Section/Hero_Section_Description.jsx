import React from 'react'
import { motion } from 'framer-motion'

/**
     * Animation variants for text elements:
     * - Fade-in with subtle upward movement for smooth entry
     * - Uses easeOut timing for natural deceleration
*/
const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}
/**
     * Animation variants for interactive buttons:
     * - Staggered appearance after text content
     * - Includes micro-interaction for hover states
*/
const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
            duration: 0.6,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2
        }
    }
}
/**
     * Hero Section Description Component
     * Displays professional profile information with:
     * - Sequential animated text elements
     * - Interactive call-to-action buttons
     * - Responsive typography hierarchy
     * 
     * @param {Object} props - Component properties
     * @param {string} props.name - First name to display
     * @param {string} props.family - Last name (styled differently)
     * @param {string} props.skils - Professional title/skills
     * @param {string} props.info - Descriptive paragraph
     * @returns {React.Element} - Animated profile description component
*/
const Hero_Section_Description = ({ name, family, skils, info }) => {
    return (
        <motion.div
            className="md:w-1/2 mb-12 md:mb-0"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
        >
            {/* Introductory greeting with accent color */}
            <motion.h4 className="text-indigo-400 text-lg mb-2" variants={textVariants}>
                Hello, I'm
            </motion.h4>
            {/* Primary name display with last name accent */}
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-4" variants={textVariants}>
                {name}
                {/* Animated last name with separate transition */}
                <motion.span
                    className="text-indigo-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    {" "}{family}
                </motion.span>
            </motion.h1>
            {/* Professional title/skills */}
            <motion.h3 className="text-xl md:text-2xl mb-6" variants={textVariants}>
                {skils}
            </motion.h3>
            {/* Descriptive paragraph with constrained width */}
            <motion.p className="text-gray-400 mb-8 max-w-lg" variants={textVariants}>
                {info}
            </motion.p>
            {/* Call-to-action button group */}
            <motion.div className="flex space-x-4" variants={textVariants}>
                {/* Primary action button */}
                <motion.a
                    href="#contact"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition duration-300"
                    variants={buttonVariants}
                    whileHover="hover"
                >
                    Hire Me
                </motion.a>
                {/* Secondary action button */}
                <motion.a
                    href="#"
                    className="border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-md transition duration-300"
                    variants={buttonVariants}
                    whileHover="hover"
                >
                    Download CV
                </motion.a>
            </motion.div>
        </motion.div>
    )
}

export default Hero_Section_Description