import React from 'react'
import { Link } from 'react-router-dom'

// Stylesheets
import './Navbar.scss'

// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <FontAwesomeIcon
          icon={["fab", "apple"]}
          className="navbar__logo"
          size="lg"
        />
      </Link>

      <Link to="/bag" className="navbar__logo">
        <FontAwesomeIcon
          icon="shopping-bag"
          className="navbar__logo"
          size="lg"
        />
      </Link>
    </nav>
  )
}

export default Navbar;
