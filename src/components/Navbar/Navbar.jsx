import React from 'react'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        <FontAwesomeIcon icon={["fab", "apple"]} size="lg"/>
      </NavLink>
    </nav>
  )
}

export default Navbar;
