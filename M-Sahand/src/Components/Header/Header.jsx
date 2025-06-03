import React from 'react'
import { useState, useEffect, useRef } from "react";
import Navigatio from './Navigatio'
import Navigation_Mobile_Menu from './Navigation_Mobile_Menu'
import Link from './Navigation__Link'
import Navigation_Mobile_Menu_Btn from './Navigation_Mobile_Menu_Btn'

/**
     * Header Component
     * 
     * A responsive navigation header with:
     * - Desktop and mobile menu variants
     * - Scroll-spy functionality for section highlighting
     * - Sticky positioning with blur effect
     * - Accessibility-compliant navigation
     * - Smooth animations for mobile menu
*/

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const sectionElements = useRef({});
    const scrollTimeoutRef = useRef(null);

    // Navigation data for both desktop and mobile menus
    const navItems = [
        { id: 'home', label: 'Home', href: '#home' },
        { id: 'about', label: 'About', href: '#about' },
        { id: 'services', label: 'Services', href: '#services' },
        { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
        { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
        { id: 'blog', label: 'Blog', href: '#blog' },
        { id: 'contact', label: 'Contact', href: '#contact' }
    ];

    const registerSection = (id, element) => {
        if (element) {
            sectionElements.current[id] = element;
        }
    };

    /**
        * Handles mobile menu toggle
        * Toggles mobile menu state and triggers click handler
    */
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => {
            document.body.style.overflow = !prev ? 'hidden' : '';
            return !prev;
        });
    };
    /**
        * Calculates which section is currently in view
        * based on scroll position and element offsets
    */
    const updateActiveSection = () => {
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
            const scrollPosition = window.scrollY + 100;

            for (const [id, element] of Object.entries(sectionElements.current)) {
                if (!element) continue;

                const { offsetTop, offsetHeight } = element;
                const sectionBottom = offsetTop + offsetHeight;

                if (scrollPosition >= offsetTop && scrollPosition < sectionBottom) {
                    setActiveSection(id);
                    break;
                }
            }
        }, 100);
    }
    // Set up scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', updateActiveSection);
        return () => {
            window.removeEventListener('scroll', updateActiveSection);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    // Initialize active section on first render
    useEffect(() => {
        updateActiveSection();
    }, []);

    return (
        <header className="fixed w-full z-40 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-sm">
            {/* Navbar */}
            <div className="container mx-auto px-8 py-4">
                {/* Navigation menu For tablet & desktop */}
                <Navigatio>
                    <a href="#" className="text-2xl font-bold text-indigo-400">Mehdi Leilaei</a>

                    {/* Desktop Menu Items */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map(item => (
                            <Link
                                key={item.id}
                                id={item.id}
                                href={item.href}
                                active={activeSection === item.id}
                                registerSection={registerSection}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    {/* Mobile Menu Button */}
                    <Navigation_Mobile_Menu_Btn isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
                </Navigatio>
                {/* Navigation Mobile Menu */}
                <Navigation_Mobile_Menu
                    isOpen={isMobileMenuOpen}
                    onClose={toggleMobileMenu}
                    activeSection={activeSection}
                    navItems={navItems}
                    registerSection={registerSection}
                />
            </div>
        </header>
    )
}

export default Header