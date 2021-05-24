import React from 'react'
import './ItemBar.scss'

// Icons
import MacBookAir from 'assets/icons/macbook-air.svg'
import MacBookPro13 from 'assets/icons/macbook-pro-13.svg'
import MacBookPro16 from 'assets/icons/macbook-pro-16.svg'
import iMac24 from 'assets/icons/imac-24.svg'
import iMac27 from 'assets/icons/imac-27.svg'
import MacPro from 'assets/icons/mac-pro.svg'
import MacMini from 'assets/icons/mac-mini.svg'

const ItemBar = () => {

  // Items for ItemBar
  const items = [
    {
      icon: MacBookAir,
      label: 'MacBook Air'
    }, {
      icon: MacBookPro13,
      label: 'MacBook Pro 13"'
    }, {
      icon: MacBookPro16,
      label: 'MacBook Pro 16"'
    }, {
      icon: iMac24,
      label: 'iMac 24"'
    }, {
      icon: iMac27,
      label: 'iMac 27"'
    }, {
      icon: MacPro,
      label: 'Mac Pro'
    }, {
      icon: MacMini,
      label: 'Mac mini'
    }
  ]

  return (
    <nav className="item-nav">
      <div className="item-nav__wrapper">
        <ul className="item-nav__items">
          {items.map((item, index) => {
            return (
              <li key={item.index} className="item">
                <img src={item.icon} className="item__icon" alt={item.label} />
                <p className="item__label">{item.label}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>

  )
}


export default ItemBar;
