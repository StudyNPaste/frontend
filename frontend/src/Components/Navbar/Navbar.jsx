import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import hamburgerIcon from '../Assets/menu-drop.png' // Update the path based on your icon location

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className='navbar'>
        <div>
            <Link to="/" onClick={closeMenu}><div className='logo-text'>
              <h4><span id='logo-text-bold'>Rodgers </span>Consulting Services Inc.</h4>
            </div></Link>
        </div>
        <button className='menu-btn' onClick={toggleMenu}>
          <img src={hamburgerIcon} alt='Menu' />
        </button>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About Us</Link>
            <Link id='nav-service-btn' to="/services" onClick={closeMenu}>Services</Link>
        </div>
    </div>
  )
}

export default Navbar