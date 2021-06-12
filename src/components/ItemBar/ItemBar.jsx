import React from 'react'
import './ItemBar.scss'

// Components
import ItemBarItem from 'components/ItemBarItem/ItemBarItem'

// Icons
import MacBookAir from 'assets/icons/macbook-air.svg'
import MacBookPro from 'assets/icons/macbook-pro-16.svg'
import iMac from 'assets/icons/imac-24.svg'

const ItemBar = () => {

  // Items for ItemBar
  const items = [
    {
      icon: MacBookAir,
      label: 'MacBook Air'
    }, {
      icon: MacBookPro,
      label: 'MacBook Pro'
    }, {
      icon: iMac,
      label: 'iMac'
    }
  ]

  return (
    <nav className="item-nav">
      <div className="item-nav__wrapper">
        <ul className="item-nav__items">
          {items.map((item, index) => {
            return (
              <ItemBarItem
                key={index}
                icon={item.icon}
                label={item.label}
              />
            )
          })}
        </ul>
      </div>
    </nav>
  )
}


export default ItemBar;
