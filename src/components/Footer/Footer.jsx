import React from 'react'
import { Link } from 'react-router-dom'

// Stylesheet
import './Footer.scss'

// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Link to="/" className="footer__logo">
          <FontAwesomeIcon
            icon={["fab", "apple"]}
            className="footer__logo"
            size="lg"
          />
        </Link>
        Mac
      </div>
    </footer>
  )
}

export default Footer;
