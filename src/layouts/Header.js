import React from 'react'
import { Link } from 'react-router-dom'
import profilePic from '../assets/images/avatar.svg'
import logo from '../assets/images/logo.svg'
import miniLogo from '../assets/images/mini-logo.svg'
import { BsBell } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import { HiSearch } from 'react-icons/hi'


const Header = () => {
   

  return (
    <header>
        <h1>
          <Link className='hideOnSmall' to="/"><img src={logo} alt='logo' /></Link>
          <Link className='showOnSmall' to="/"><img src={miniLogo} alt='logo' /></Link>
        </h1>
        <div className='searchInput'>
          {/* <input type="search" placeholder='Search for anything' />
          <button><HiSearch /></button> */}
        </div>
          <div className='img-profile'>
              <BsBell />
              <img className='img_logo' src={profilePic} alt="profile" />
              <p>Adedeji </p>
          </div>
    </header>
  )
}

export default Header