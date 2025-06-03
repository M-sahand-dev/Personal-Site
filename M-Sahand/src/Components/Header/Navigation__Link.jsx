import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

/**
 * Navigation Link Component
 * @param {string} id - Section ID for active state
 * @param {string} href - Link destination
 * @param {boolean} active - Whether the link is active
 * @param {ReactNode} children - Link content
 */
const Navigation__Link = ({ id, href, active, children, mobile, onClick, registerSection }) => {
    const linkRef = useRef(null);
    useEffect(() => {
        if (registerSection && id) {
            const sectionElement = document.getElementById(id);
            if (sectionElement) {
                registerSection(id, sectionElement);
            }
        }
    }, [id, registerSection])
    return (
        <motion.a
            href={href}
            onClick={onClick}
            className={`
                ${mobile ? 'px-3 py-2 text-base' : 'px-3 py-2 rounded-md text-sm'}
                block transition-colors duration-300
                ${active ? 'text-indigo-400 font-medium' : 'text-gray-300 hover:text-white'}
            `}
            whileHover={{ scale: mobile ? 1.05 : 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
            aria-current={active ? 'page' : undefined}
        >
            {children}
        </motion.a>
    );
};

export default Navigation__Link;