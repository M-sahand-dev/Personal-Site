// hooks/useActiveSection.js
import { useState, useEffect } from "react";

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
    handleScroll(); // بررسی اولیه

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
};

export default useActiveSection;
