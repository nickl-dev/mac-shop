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
        <div className="footer__header">
          <Link to="/" className="footer__logo">
            <FontAwesomeIcon
              icon={["fab", "apple"]}
              className="footer__logo"
              size="lg"
            />
          </Link>
          MacShop
        </div>

        <div className="footer__locale">
          More ways to shop:
          <a href="https://www.apple.com/ca/mac/" className="footer__anchor">Find an Apple Store</a>
           or
          <a href="https://www.apple.com/ca/mac/" className="footer__anchor">other retailer</a>
          near you.
          <span>Or call 1-800-MAC-SHOP.</span>
        </div>

        <div className="footer__legal">
          Copyright ©2021 Apple Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;
