import React from 'react'
import Contact__Title from './Contact__Title'
import Contact__Content from './Contact__Content'

const Contact = () => {
    return (
        <div id="contact" className="py-20">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <Contact__Title />
                {/* Section Content */}
                <Contact__Content />
            </div>
        </div>
    )
}

export default Contact
