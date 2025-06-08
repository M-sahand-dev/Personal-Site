import React from 'react'
import Contact__Content_About from './Contact__Content_About'
import Form from "./Cintact__Content_Form"

const Contact__Content = () => {
    return (
        <div className="flex flex-col md:flex-row">
            {/* Contact information section */}
            <Contact__Content_About />
            {/* Contact form for sending messages */}
            <Form />
        </div>
    )
}

export default Contact__Content
