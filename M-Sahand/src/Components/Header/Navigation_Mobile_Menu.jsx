import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation_Mobile_Menu = ({ dataMenu, isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    id="mobile-menu"
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
                            {dataMenu.map((item) => (
                                <motion.a
                                    key={item.id}
                                    href={item.href}
                                    className={item.classStyleMobile}
                                    onClick={onClose}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {item.title}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Navigation_Mobile_Menu;