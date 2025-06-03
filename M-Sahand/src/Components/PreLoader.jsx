import { motion, AnimatePresence } from "framer-motion";

const PreLoader = () => {
    return (
        <motion.div
            id="preloader"
            className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <motion.div
                className="rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"
                animate={{
                    rotate: 360,
                    borderTopColor: "#3B82F6",
                }}
                transition={{
                    rotate: {
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                    },
                    borderTopColor: {
                        repeat: Infinity,
                        duration: 2,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    },
                }}
            />
        </motion.div>
    );
};


export default PreLoader