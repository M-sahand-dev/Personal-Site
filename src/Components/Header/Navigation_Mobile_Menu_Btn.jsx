import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Navigation_Mobile_Menu_Btn = ({ isOpen, onClick }) => {
    return (
        <button
            id="mobile-menu-button"
            onClick={onClick}
            className="md:hidden text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: isOpen ? 180 : 0,
                    scale: isOpen ? 1.1 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                }}
            >
                {isOpen ? (
                    <IoMdClose className='text-2xl' />
                ) : (
                    <GiHamburgerMenu className='text-2xl' />
                )}
            </motion.div>
        </button>
    );
};

export default Navigation_Mobile_Menu_Btn;