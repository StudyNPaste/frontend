import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <Link to="/"><div>
              <h4><span id='logo-text-bold'>Rodgers </span>Consulting Services Inc.</h4>
            </div></Link>
        </div>
        <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar