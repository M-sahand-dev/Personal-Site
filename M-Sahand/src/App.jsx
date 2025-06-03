import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Component imports with clear grouping
import PreLoader from './Components/PreLoader'
import Header from './Components/Header/Header'
import Hero_Section from './Components/Hero_Section/Hero_Section'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Back_Top from './Components/Back_Top'

// Data imports (marked for potential removal in future)
import dataMenu from './data/Navigation__Menu'
import dataHeroMe from './data/Hero-me'
import dataAbout from './data/data_Info'

/*
 * Main App Component
 * 
 * Handles the core application layout, loading states, and page transitions.
 * Uses Framer Motion for smooth animations between states.
*/
function App() {
  // State management for component data
  const [navMenu, setNavMenu] = useState(dataMenu)// del❌❌
  const [heroMe, setHeroMe] = useState(dataHeroMe)// del❌❌
  const [about, setAbout] = useState(dataAbout)// del❌❌

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
    initial: {
      opacity: 0,
      // Slight vertical offset for enter animation❗
      y: 20
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        // Smooth 800ms animation ❗
        duration: 0.8,
        // Natural easing curve ❗
        ease: "easeOut"
      }
    },
    out: {
      opacity: 0,
      // Upward exit animation
      y: -50,
      transition: {
        // Faster exit transition
        duration: 0.5
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
                <Header dataMenu={navMenu} />

                {/* Hero/Banner Section */}
                <Hero_Section {...heroMe} />

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
