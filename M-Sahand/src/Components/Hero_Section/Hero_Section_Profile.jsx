import React from 'react'
import { motion } from 'framer-motion'

/**
     * Animation variants for the profile image:
     * - hidden: Starting state (invisible and offset to the right)
     * - visible: Animated state with spring physics for natural movement
*/
const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
}
/**
     * Animation variants for the decorative border:
     * - Starts offset and invisible
     * - Animated with delay for sequenced appearance
*/
const borderVariants = {
    hidden: { opacity: 0, x: -30, y: -30 },
    visible: {
        opacity: 1,
        x: -6,
        y: -6,
        transition: {
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
}
/**
     * Profile Image Component
     * Displays a professional profile photo with:
     * - Spring-based entrance animation
     * - Decorative animated border
     * - Interactive hover effect
     * @param {Object} props - Component props
     * @param {string} props.Image - Path to the profile image
     * @returns {React.Element} - Animated profile image component
*/
const Hero_Section_Profile = ({ Image }) => {
    return (
        <motion.div
            className="md:w-1/2 flex justify-center"
            variants={imageVariants}
        >
            {/* Relative container for absolutely positioned border */}
            <div className="relative">
                {/* Decorative border with separate animation */}
                <motion.div
                    className="absolute -top-6 -left-6 w-full h-full border-2 border-indigo-400 rounded-lg z-0"
                    variants={borderVariants}// Apply image animation variants
                />
                {/* Profile image with interactive hover effect */}
                <motion.img
                    src={Image}
                    alt="Profile"
                    className="relative z-10 rounded-lg w-80 h-96 object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
            </div>
        </motion.div>
    )
}

export default Hero_Section_Profile