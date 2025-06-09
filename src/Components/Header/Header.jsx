import React, { useState } from "react";
import { Link } from "react-scroll";
import Navigation_Mobile_Menu_Btn from './Navigation_Mobile_Menu_Btn';
import Navigation_Mobile_Menu from './Navigation_Mobile_Menu';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => {
            document.body.style.overflow = !prev ? 'hidden' : '';
            return !prev;
        });
    };

    const navItems = [
        { id: 'home', label: 'Home', offset: -150 },
        { id: 'about', label: 'About', offset: -100 },
        { id: 'services', label: 'Services', offset: -100 },
        { id: 'portfolio', label: 'Portfolio', offset: -100 },
        { id: 'testimonials', label: 'Testimonials', offset: -100 },
        { id: 'blog', label: 'Blog', offset: -150 },
        { id: 'contact', label: 'Contact', offset: -150 }
    ];

    return (
        <header className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm shadow-lg">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        offset={-150}
                        className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                    >
                        Mehdi Leilaei
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        {navItems.map(item => (
                            <Link
                                key={item.id}
                                to={item.id}
                                spy={true}
                                smooth={true}
                                offset={item.offset}
                                duration={500}
                                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                                activeClass="text-indigo-400 font-semibold"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <Navigation_Mobile_Menu_Btn
                        isOpen={isMobileMenuOpen}
                        onClick={toggleMobileMenu}
                    />

                </div>

                {/* Mobile Menu */}
                <Navigation_Mobile_Menu
                    isOpen={isMobileMenuOpen}
                    onClose={toggleMobileMenu}
                    navItems={navItems}
                />
            </div>
        </header>
    );
};

export default Header;