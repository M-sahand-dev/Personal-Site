import React from 'react'
import Contact__Content_About from './Contact__Content_About'
import Form from "./Cintact__Content_Form"

const Contact__Content = () => {
    return (
        <div className="flex flex-col md:flex-row">
            {/* in this section we will add the contact information */}
            <Contact__Content_About />
            {/* in this form for sending camant */}
            <Form />
        </div>
    )
}

export default Contact__Content