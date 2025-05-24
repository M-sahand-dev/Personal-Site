import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const Navigation_Mobile_Menu_Btn = () => {
  return (
    <button id="mobile-menu-button"
      class="md:hidden text-white focus:outline-none">
      <GiHamburgerMenu className='text-2xl'/>
    </button>
  )
}

export default Navigation_Mobile_Menu_Btn