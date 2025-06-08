import React from 'react'
import Container_Link from "./Footer_Container_Link"
import Link from "./Footer_Link"

/**
 * Footer component - Displays the website footer with copyright and navigation links
 * 
 * Features:
 * - Responsive layout (stacked on mobile, horizontal on desktop)
 * - Copyright notice with dynamic year
 * - Navigation links section
 * - Dark theme with subtle border
 */
const Footer = () => {
    return (
        // Main footer container with dark background and top border
        <footer className="bg-gray-900 py-10 border-t border-gray-800">
            {/* Centered container with horizontal padding */}
            <div className="container mx-auto px-6">
                {/* Flex container that changes direction based on screen size */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Copyright section - appears first on mobile */}
                    <div className="mb-6 md:mb-0">
                        <p className="text-gray-400">© 2025 Mehdi Leilaei. All rights reserved.</p>
                    </div>

                    {/* Navigation links section - appears second on mobile */}
                    <div className="">
                        {/* Reusable link container component */}
                        <Container_Link>
                            {/* Individual footer links */}
                            <Link href={"#"} link={"Home"}></Link>
                            <Link href={"#"} link={"Privacy"}></Link>
                            <Link href={"#"} link={"Terms"}></Link>
                            <Link href={"#"} link={"FAQ"}></Link>
                        </Container_Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
