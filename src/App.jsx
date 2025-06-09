import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

import {
  PreLoader,
  Header,
  Hero_Section,
  About,
  Services,
  Portfolio,
  Testimonials,
  Blog,
  Contact,
  Footer,
  Back_Top,
} from "./helper/components";

// Data imports
import { data_Information } from "./helper/data"

/*
 * Main App Component
 * 
 * Handles the core application layout, loading states, and page transitions.
 * Uses Framer Motion for smooth animations between states.
*/
function App() {
  // State management for component data
  const [about] = useState(data_Information)

  // Loading state control
  const [loading, setLoadig] = useState(true);

  /**
   * Simulates data fetching with a delay
   * @returns {Promise} Resolves after 2 seconds to simulate network request
  */
  const fetchingData = async () => {
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        setLoadig(false);
        resolve();
      }, 2000); // 2 seconds delay

      // Cleanup function to prevent memory leaks
      return () => clearTimeout(timer)
    });
  };

  /**
   * Effect hook for initial data loading
   * Manages loading state and body class toggling
  */
  useEffect(() => {
    fetchingData();
    // Add 'loaded' class to body when loading completes
    if (!loading) {
      document.body.classList.add('loaded')
    }
  }, [loading]);

  /**
     * Animation variants for page transitions
     * Defines three states: initial, animate, and exit
  */
  const pageVariants = {
    initial: { opacity: 0 },
    in: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  }

  return (
    <>
      {/* 
        AnimatePresence handles exit animations
        Allows components to animate out when removed
      */}
      <AnimatePresence>
        {
          loading ?
            <>
              {/* Show preloader while loading */}
              <PreLoader key="preloader" />
            </> : (
              // Main content with entrance animation
              <motion.div
                key="content"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                className="main-content"
              >
                {/* 
                Application layout structure
                Each section is clearly separated with comments
              */}

                {/* Navigation Header */}
                <Header />

                {/* Hero/Banner Section */}
                <Hero_Section />

                {/* About Me Section */}
                <About {...about} />

                {/* Services/Offerings Section */}
                <Services />

                {/* Portfolio/Work Showcase */}
                <Portfolio />

                {/* Client Testimonials */}
                <Testimonials />

                {/* Blog/Articles Section */}
                <Blog />

                {/* Contact Form Section */}
                <Contact />

                {/* Footer with Links/Info */}
                <Footer />

                {/* Back-to-Top Floating Button */}
                <Back_Top />
              </motion.div>
            )
        }
      </AnimatePresence>

    </>
  )
}

export default App
