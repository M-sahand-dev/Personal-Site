import React from 'react'
import { useState, useEffect } from "react";
import Navigation_Mobile_Menu_Btn from './Navigation_Mobile_Menu_Btn';


const Navigatio = ({ dataMenu, onMobileMenuToggle, isMobileMenuOpen }) => {

    const useActiveSection = (sectionIds, offset = 80) => {
        const [activeId, setActiveId] = useState(null);

        useEffect(() => {
            const handleScroll = () => {
                let current = null;

                sectionIds.forEach((id) => {
                    const section = document.getElementById(id.replace("#", ""));
                    if (!section) return;

                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (
                        window.scrollY >= sectionTop - offset &&
                        window.scrollY < sectionTop + sectionHeight - offset
                    ) {
                        current = id;
                    }
                });

                setActiveId(current);
            };

            window.addEventListener("scroll", handleScroll);
            handleScroll();

            return () => window.removeEventListener("scroll", handleScroll);
        }, [sectionIds, offset]);

        return activeId;
    };

    const sectionIds = dataMenu.map(item => item.href);
    const activeSection = useActiveSection(sectionIds);

    return (
        <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-indigo-400">Mehdi Leilaei</a>

            <nav className="hidden md:flex space-x-8">
                {dataMenu.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        className={`nav-link ${activeSection === item.href ? 'active' : ''}`}
                    >
                        {item.title}
                    </a>
                ))}
            </nav>

            <Navigation_Mobile_Menu_Btn
                onClick={onMobileMenuToggle}
                isOpen={isMobileMenuOpen}
            />
        </div>
    );
}

export default Navigatio