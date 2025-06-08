import React from 'react'

const Cintact__Content_Form = () => {
    return (
        // Contact form container with responsive width
        <div className="md:w-1/2">
            <form id="contact-form" className="space-y-6">
                {/* Name and Email inputs side by side on medium screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block mb-2">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
                        />
                    </div>
                </div>

                {/* Subject input */}
                <div>
                    <label htmlFor="subject" className="block mb-2">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
                    />
                </div>

                {/* Message textarea */}
                <div>
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
                    ></textarea>
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition duration-300 w-full md:w-auto"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Cintact__Content_Form
