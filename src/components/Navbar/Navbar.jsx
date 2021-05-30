import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo" />
    </nav>
  )
}

export default Navbar;
