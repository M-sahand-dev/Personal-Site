import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from './Navigation__Link';

/**
 * Mobile Menu Component
 * @param {boolean} isOpen - Controls menu visibility
 * @param {function} onClose - Callback to close menu
 * @param {string} activeSection - Currently active section
 * @param {Array} navItems - Navigation items data
 */
const Navigation_Mobile_Menu = ({ isOpen, onClose, activeSection, navItems, registerSection }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20, height: 0 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        height: "auto",
                        transition: {
                            opacity: { duration: 0.3 },
                            y: { duration: 0.3 },
                            height: { duration: 0.4 }
                        }
                    }}
                    exit={{
                        opacity: 0,
                        y: -20,
                        height: 0,
                        transition: {
                            opacity: { duration: 0.2 },
                            y: { duration: 0.2 },
                            height: { duration: 0.3 }
                        }
                    }}
                    className="md:hidden bg-gray-800 overflow-hidden"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.2 } }}
                        exit={{ opacity: 0 }}
                        className="py-4 px-6"
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map(item => (
                                <Link
                                    key={item.id}
                                    id={item.id}
                                    href={item.href}
                                    active={activeSection === item.id}
                                    mobile
                                    onClick={onClose}
                                    registerSection={registerSection}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Navigation_Mobile_Menu;