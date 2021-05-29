import React from 'react'

// Stylesheet
import './Landing.scss'

// Components
import ItemBar from 'components/ItemBar/ItemBar'

const Landing = () => {
  return (
    <div className="landing">
      <ItemBar />

      <div className="hero">
        <div className="hero__wrapper">
          <span className="hero__new">New</span>
          <h2 className="hero__heading">iMac</h2>
          <p className="hero__hello">Say Hello.</p>
          <p className="hero__price">From $1599</p>
          <button className="hero__buy">Buy</button>
          <p className="hero__learn-more">Learn More ></p>
        </div>

        <figure className="mac__image" />
      </div>
    </div>
  )
}

export default Landing;
