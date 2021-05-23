import React from 'react'
import './ProductBar.scss'
import MacBookAir from 'assets/icons/macbook-air.svg'
import MacBookPro13 from 'assets/icons/macbook-pro-13.svg'
import MacBookPro16 from 'assets/icons/macbook-pro-16.svg'
import iMac24 from 'assets/icons/imac-24.svg'
import iMac27 from 'assets/icons/imac-27.svg'
import MacPro from 'assets/icons/mac-pro.svg'
import MacMini from 'assets/icons/mac-mini.svg'

const ProductBar = () => {

  const products = [
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
    <div className="product-bar">
      <ul className="product-bar__wrapper">
        {products.map((product, index) => {
          return (
            <li key={product.index} className="product">
              <img src={product.icon} className="product__icon" />
              <p className="product__label">{product.label}</p>
            </li>
          )
        })}
      </ul>

    </div>
  )
}


export default ProductBar;
