import React from 'react'
import Container_link from "./Contact__Content_Container_Link"
import Link from "./Contact_Caontent_Link"
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";


const Contant__Content_About_Link = () => {
    return (
        <div className="mt-10">
            <h4 className="font-bold mb-4">Follow Me</h4>
            <Container_link>
                <Link href={"https://x.com/M_sahand_js?t=Y3nphbBdHJupcrOUMiTtHA&s=09"} icon={<IoLogoTwitter />}></Link>
                <Link href={"https://www.instagram.com/m_sahand_js?igsh=MXIxZTZuaXg5dmRuNw=="} icon={<FaInstagram />}></Link>
                <Link href={"https://www.linkedin.com/in/mehdi-leilaei-0042162aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} icon={<FaLinkedinIn />}></Link>
                <Link href={"https://github.com/M-sahand-dev"} icon={<FaGithub />}></Link>
            </Container_link>
        </div>
    )
}

export default Contant__Content_About_Link