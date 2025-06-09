import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-scroll";

const Navigation_Mobile_Menu = ({ isOpen, onClose, navItems }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: 1,
                        height: "auto",
                        transition: {
                            duration: 0.4,
                            ease: "easeInOut"
                        }
                    }}
                    exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                            duration: 0.3,
                            ease: "easeInOut"
                        }
                    }}
                    className="md:hidden bg-gray-800/95 backdrop-blur-lg shadow-inner"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.2 }
                        }}
                        exit={{ opacity: 0 }}
                        className="py-3 px-4"
                    >
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ x: -30, opacity: 0 }}
                                    animate={{
                                        x: 0,
                                        opacity: 1,
                                        transition: {
                                            delay: 0.3 + index * 0.08,
                                            type: "spring",
                                            stiffness: 120,
                                            damping: 10
                                        }
                                    }}
                                    exit={{
                                        x: -30,
                                        opacity: 0,
                                        transition: {
                                            delay: index * 0.03,
                                            duration: 0.2
                                        }
                                    }}
                                >
                                    <Link
                                        to={item.id}
                                        spy={true}
                                        smooth={true}
                                        offset={item.offset}
                                        duration={500}
                                        onClick={onClose}
                                        className="
                                            block px-4 py-3 rounded-lg
                                            text-gray-200 hover:text-white
                                            hover:bg-gray-700/40
                                            transition-all duration-200
                                            font-medium
                                            active:bg-gray-700/30
                                        "
                                        activeClass="
                                            font-medium
                                            active:bg-gray-700/30
                                        "
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Navigation_Mobile_Menu;