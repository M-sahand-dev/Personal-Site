import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

/**
 * BackToTop - Scroll-to-top button component
 * 
 * Features:
 * - Appears when user scrolls beyond 300px
 * - Smooth scroll animation to top
 * - Clean fade-in/out transition
 * - Fixed position for accessibility
 * - Clean arrow icon indicator
 */
const BackToTop = () => {
    // State to manage button visibility
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility based on scroll position
    const toggleVisibility = () => {
        setIsVisible(window.pageYOffset > 300);
    };

    // Smooth scroll to top of page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Add scroll event listener on mount and clean up
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            id="back-to-top"
            aria-label="Scroll to top"
            className={`
                fixed bottom-8 right-8 
                bg-indigo-600 text-white 
                w-12 h-12 rounded-full 
                flex items-center justify-center 
                transition duration-300 
                ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}
            onClick={scrollToTop}
        >
            <FaArrowUp />
        </button>
    );
};

export default BackToTop;