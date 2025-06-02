import React from 'react'
import Container_Link from "./Footer_Container_Link"
import Link from "./Footer_Link"

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-10 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <p className="text-gray-400">© 2025 Mehdi Leilaei. All rights reserved.</p>
                    </div>
                    <div className="">
                        <Container_Link>
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
