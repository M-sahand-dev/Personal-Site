import React from 'react'
import Contact__Content_CallMe_Item from './Contact__Content_CallMe_Item'
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Contact__Content_CallMe = () => {
    return (
        // Container holding contact information items (location, email, phone)
        <div className="space-y-6">
            <Contact__Content_CallMe_Item
                icon={<FaMapMarkerAlt />}
                title={"Location"}
                description={"Dezful , Khozestan , IRAN"}
            />
            <Contact__Content_CallMe_Item
                icon={<MdEmail />}
                title={"Email"}
                description={"mehdileilaei443@gmail.com"}
            />
            <Contact__Content_CallMe_Item
                icon={<FaPhone />}
                title={"Phone"}
                description={"+98 9019467300"}
            />
        </div>
    )
}

export default Contact__Content_CallMe
