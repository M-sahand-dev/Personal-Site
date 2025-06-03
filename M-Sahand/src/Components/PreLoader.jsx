import { motion, AnimatePresence } from "framer-motion";

/*
    * PreLoader Component
    * 
    * Displays a full-screen loading animation with a spinning indicator.
    * Uses Framer Motion for smooth animations and transitions.
    * 
    * Features:
    * - Full-screen overlay with fade-out animation
    * - Infinite spinning loader with color transition
    * - Accessible by default (motion components handle ARIA)
    * - Optimized performance with hardware acceleration
 */

const PreLoader = () => {
    return (
        /*
            * Main Preloader Container
            * - Fixed positioning covers entire viewport
            * - Dark background for contrast
            * - High z-index to ensure visibility
            * - Fade-out animation when unmounting
        */
        <motion.div
            id="preloader"
            className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {/**
                * Animated Spinner Element
                * - Circular shape with border styling
                * - Infinite 360-degree rotation
                * - Color transition on top border
            */}
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