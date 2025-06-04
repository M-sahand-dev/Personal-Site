import React from 'react'
import { motion } from 'framer-motion'
import Hero_Section_Profile from './Hero_Section_Profile'
import Description from './Hero_Section_Description'
import Mehdi from "../../assets/image/profile/Mehdi.jpg"

/**
     * Animation variants for the container element
     * Defines the hidden and visible states with staggered children animations
*/

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3
        }
    }
}

/**
     * Hero Section Component - The main hero section of the portfolio
     * Contains profile description and image with sophisticated animations
*/
const Hero_Section = () => {
    return (
        <section id='home' className="min-h-screen flex items-center pt-20">
            {/* Animated container with responsive padding and layout */}
            <motion.div
                className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Profile description component with personal information */}
                <Description
                    name={"Mehdi"}
                    family="Leylaei"
                    skils="React Developer & Frontend Developer"
                    info={"I developing and build beautiful websites and applications that help people and businesses grow online."}
                />

                {/* Profile image component with sophisticated border animation */}
                <Hero_Section_Profile Image={Mehdi} />
            </motion.div>
        </section>
    )
}

export default Hero_Section