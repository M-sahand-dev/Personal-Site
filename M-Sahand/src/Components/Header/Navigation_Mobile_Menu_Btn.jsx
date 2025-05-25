import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const Navigation_Mobile_Menu_Btn = ({ onClick }) => {
  return (
    <button id="mobile-menu-button"
      onClick={onClick}
      class="md:hidden text-white focus:outline-none">
      <GiHamburgerMenu className='text-2xl' />
    </button>
  )
}

export default Navigation_Mobile_Menu_Btn